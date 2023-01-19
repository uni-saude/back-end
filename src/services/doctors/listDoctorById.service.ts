import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";

const listDoctorByIdService = async (doctorId: string) => {
  const doctor = await AppDataSource.createQueryBuilder()
    .select("doctors")
    .from(Doctor, "doctors")
    .where("doctors.id = :id_do_doctor", { id_do_doctor: doctorId })
    .getOne();

  return doctor;
};

export default listDoctorByIdService;
