import { AppDataSource } from "../../data-source";
import { IPatient, IPatientExpressRequest } from "../../interfaces/patientsInterface";
import { patientDataWhiteoutSchema } from "../../schemas/patients";
import { AppError } from "../../error";
import Tutor from "../../entities/tutors.entity";
import Patient from "../../entities/patientsEntity";
import Address from "../../entities/addresses.entity";
import { IAddress } from "../../interfaces/addressesInterface";

const patientsCreateService = async (patientData:any, addressData:object) => {
    //Criar endereço
    const addressRepository = AppDataSource.getRepository(Address);
    const newAddress = addressRepository.create(addressData);
    await addressRepository.save(newAddress);
    const {id} = newAddress
    //---------------            
    delete patientData.address
    patientData = {...patientData, addressId:id}
    const {cpf, age, email, father, mother, tutorId} = patientData
    const tutorRepo = AppDataSource.getRepository(Tutor)
    const valitedTutor = tutorRepo.findOneBy({id:tutorId})

    if(!valitedTutor){
        throw new AppError(404, "Tutor is not registred")
    }
    if(age < 18 && father.length === 0 && mother.length === 0){
        throw new AppError(401, "patient is a minor and has not registered guardians")
    }

    const patientRepo = AppDataSource.getRepository(Patient)
    const findPatient = await patientRepo.findOneBy({email:email, cpf:cpf})
    
    if(findPatient){
        throw new AppError(400, "Patient is alredy exist")
    }  

    const newPatient = patientRepo.create(patientData)
    console.log(newPatient, 'novo paciente');
    
    await patientRepo.save(newPatient)
    const patientTrated = await patientDataWhiteoutSchema.validate(newPatient, {stripUnknown:true})
    console.log(patientTrated, 'tratado');
    
    return patientTrated
}
export {patientsCreateService};