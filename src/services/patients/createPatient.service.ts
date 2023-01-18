import { AppDataSource } from "../../data-source";
import { IPatient, IPatientExpressRequest } from "../../interfaces/patientsInterface";
import { patientDataWhiteoutSchema } from "../../schemas/patients";
import { AppError } from "../../error";
import Tutor from "../../entities/tutors.entity";
import Patient from "../../entities/patientsEntity";
import Address from "../../entities/addresses.entity";
import PatientToAddress from "../../entities/patientsToAddresses.entity";

const patientsCreateService = async (patientData:any, addressData:Object):Promise<IPatient> => {
    //Criando address e salvando dados
    const addressRepository = AppDataSource.getRepository(Address);
    const newAddress = addressRepository.create(addressData);
    await addressRepository.save(newAddress);
    const {id} = newAddress

    delete patientData.address
    patientData = {...patientData, addressId:id}

    //Buscando tutor e validando se é menor de idade e se for se os campos de estão sendo preenchidos
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

    //Criação de patient e salvando dados do patient
    const newPatient = patientRepo.create(patientData)
    await patientRepo.save(newPatient)
    const patientTrated = await patientDataWhiteoutSchema.validate(newPatient, {stripUnknown:true})
    const patientId = patientTrated.id

    //Conexão com tabela pivo e atribuindo os valores (patientId - addressId)
    const patientAndAddressData:object = {patient:patientId ,address:id}
    const patientToAddressRepo = AppDataSource.getRepository(PatientToAddress)    
    const newPatientsToAddress = patientToAddressRepo.create(patientAndAddressData)
    await patientToAddressRepo.save(newPatientsToAddress) 

    return patientTrated
}
export {patientsCreateService};