import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1673532954613 implements MigrationInterface {
  name = "initialMigration1673532954613";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(42) NOT NULL, "number" integer NOT NULL, "complement" character varying(42) NOT NULL, "district" character varying(42) NOT NULL, "zip_code" integer NOT NULL, "city" character varying(42) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "exams_patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data_solicitation" TIMESTAMP NOT NULL DEFAULT now(), "date_apply" TIMESTAMP NOT NULL, "name" character varying(64) NOT NULL, "status" boolean NOT NULL DEFAULT false, "doctorId" uuid, "patientId" uuid, CONSTRAINT "PK_74451ae1e250e2c1ed1a60a84d0" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "hospitals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(64) NOT NULL, "addressId" uuid, CONSTRAINT "REL_b28e83778824b8492a8757dd34" UNIQUE ("addressId"), CONSTRAINT "PK_02738c80d71453bc3e369a01766" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "hospitals_work_doctors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "hospitalId" uuid, "doctorId" uuid, CONSTRAINT "PK_5d71564eb6f8b07407746810758" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "specializations_doctors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, CONSTRAINT "UQ_69e5da9aa8702d86ff3c55329f7" UNIQUE ("name"), CONSTRAINT "PK_26168d6f857f94517554a466b8d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "trataments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "initial_date" TIMESTAMP NOT NULL, "final_date" TIMESTAMP NOT NULL, "patientId" uuid, "doctorId" uuid, CONSTRAINT "PK_15397d2d65accaa87497c828559" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "doctors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(64) NOT NULL, "crm" character varying(11) NOT NULL, "email" character varying(72) NOT NULL, "specializationId" uuid, CONSTRAINT "UQ_d7e8212b37dd4e61e996d7289cd" UNIQUE ("crm"), CONSTRAINT "UQ_62069f52ebba471c91de5d59d61" UNIQUE ("email"), CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "appointments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "solicitation_date" TIMESTAMP NOT NULL DEFAULT now(), "appointment_date" TIMESTAMP NOT NULL, "appointment_date_type" character varying(10) NOT NULL, "specialization" character varying(72) NOT NULL, "patientId" uuid, "hospitalId" uuid, "doctorId" uuid, CONSTRAINT "UQ_5e8fa150ffb52e82be6ef01381e" UNIQUE ("specialization"), CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "medications_patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(64) NOT NULL, "tratament" character varying(64) NOT NULL, "initial_date" TIMESTAMP NOT NULL, "description" character varying(200) NOT NULL, "final_date" TIMESTAMP NOT NULL, "patientId" uuid, CONSTRAINT "PK_2a7b183bd40031f2a5a0725db9f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "patients_addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "patientId" uuid, "addressId" uuid, CONSTRAINT "PK_40b72d58071554997b535b9d299" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "tutors_patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(64) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(12) NOT NULL, CONSTRAINT "PK_068bede85d99b7dd118f275cde7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "vaccines_patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(64) NOT NULL, "date_apply" TIMESTAMP NOT NULL, "dose" integer NOT NULL, "next_dose" integer NOT NULL, "patientId" uuid, CONSTRAINT "PK_871adfd2c53e3618c4449f0e37b" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying(11) NOT NULL, "age" integer NOT NULL, "email" character varying(72) NOT NULL, "genre" character varying(20) NOT NULL, "phone" character varying(12) NOT NULL, "father" character varying(64) NOT NULL, "mother" character varying(64) NOT NULL, "blood_type" character varying(2) NOT NULL, "tutorId" uuid, CONSTRAINT "UQ_64e2031265399f5690b0beba6a5" UNIQUE ("email"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "diagnostics_patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "tratament" character varying(120) NOT NULL, "patientId" uuid, CONSTRAINT "PK_5812f16b062e71de61e4e31cb8d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "exams_patients" ADD CONSTRAINT "FK_00970b00ba4beebdfeb1795c3cd" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "exams_patients" ADD CONSTRAINT "FK_551dee99f4e07e06592107e31ff" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "hospitals" ADD CONSTRAINT "FK_b28e83778824b8492a8757dd34a" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "hospitals_work_doctors" ADD CONSTRAINT "FK_5aed6c8884f280971102c18e8b8" FOREIGN KEY ("hospitalId") REFERENCES "hospitals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "hospitals_work_doctors" ADD CONSTRAINT "FK_439d09d0a21acbf24057af04331" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "trataments" ADD CONSTRAINT "FK_b334a18171af3c278389e0de871" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "trataments" ADD CONSTRAINT "FK_74cff4158c69b81ac9f4e3e7514" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "doctors" ADD CONSTRAINT "FK_23d77f3a8a5715c6e1f42518dba" FOREIGN KEY ("specializationId") REFERENCES "specializations_doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD CONSTRAINT "FK_13c2e57cb81b44f062ba24df57d" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD CONSTRAINT "FK_36cc65c41268c0483eb22556e29" FOREIGN KEY ("hospitalId") REFERENCES "hospitals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD CONSTRAINT "FK_0c1af27b469cb8dca420c160d65" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "medications_patients" ADD CONSTRAINT "FK_78bb64b1e33aa6430a7ac5e2169" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "patients_addresses" ADD CONSTRAINT "FK_02489d76b8713627a2b4b546a47" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "patients_addresses" ADD CONSTRAINT "FK_3ee5c607e688c25a5ab819b96a6" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "vaccines_patients" ADD CONSTRAINT "FK_d9dcc5855621780a090c49e3b8e" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "patients" ADD CONSTRAINT "FK_5225523a89b6569c28f90ca90ac" FOREIGN KEY ("tutorId") REFERENCES "tutors_patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "diagnostics_patients" ADD CONSTRAINT "FK_39bfd54c258ad9b9e47d90a714c" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "diagnostics_patients" DROP CONSTRAINT "FK_39bfd54c258ad9b9e47d90a714c"`
    );
    await queryRunner.query(
      `ALTER TABLE "patients" DROP CONSTRAINT "FK_5225523a89b6569c28f90ca90ac"`
    );
    await queryRunner.query(
      `ALTER TABLE "vaccines_patients" DROP CONSTRAINT "FK_d9dcc5855621780a090c49e3b8e"`
    );
    await queryRunner.query(
      `ALTER TABLE "patients_addresses" DROP CONSTRAINT "FK_3ee5c607e688c25a5ab819b96a6"`
    );
    await queryRunner.query(
      `ALTER TABLE "patients_addresses" DROP CONSTRAINT "FK_02489d76b8713627a2b4b546a47"`
    );
    await queryRunner.query(
      `ALTER TABLE "medications_patients" DROP CONSTRAINT "FK_78bb64b1e33aa6430a7ac5e2169"`
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP CONSTRAINT "FK_0c1af27b469cb8dca420c160d65"`
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP CONSTRAINT "FK_36cc65c41268c0483eb22556e29"`
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP CONSTRAINT "FK_13c2e57cb81b44f062ba24df57d"`
    );
    await queryRunner.query(
      `ALTER TABLE "doctors" DROP CONSTRAINT "FK_23d77f3a8a5715c6e1f42518dba"`
    );
    await queryRunner.query(
      `ALTER TABLE "trataments" DROP CONSTRAINT "FK_74cff4158c69b81ac9f4e3e7514"`
    );
    await queryRunner.query(
      `ALTER TABLE "trataments" DROP CONSTRAINT "FK_b334a18171af3c278389e0de871"`
    );
    await queryRunner.query(
      `ALTER TABLE "hospitals_work_doctors" DROP CONSTRAINT "FK_439d09d0a21acbf24057af04331"`
    );
    await queryRunner.query(
      `ALTER TABLE "hospitals_work_doctors" DROP CONSTRAINT "FK_5aed6c8884f280971102c18e8b8"`
    );
    await queryRunner.query(
      `ALTER TABLE "hospitals" DROP CONSTRAINT "FK_b28e83778824b8492a8757dd34a"`
    );
    await queryRunner.query(
      `ALTER TABLE "exams_patients" DROP CONSTRAINT "FK_551dee99f4e07e06592107e31ff"`
    );
    await queryRunner.query(
      `ALTER TABLE "exams_patients" DROP CONSTRAINT "FK_00970b00ba4beebdfeb1795c3cd"`
    );
    await queryRunner.query(`DROP TABLE "diagnostics_patients"`);
    await queryRunner.query(`DROP TABLE "patients"`);
    await queryRunner.query(`DROP TABLE "vaccines_patients"`);
    await queryRunner.query(`DROP TABLE "tutors_patients"`);
    await queryRunner.query(`DROP TABLE "patients_addresses"`);
    await queryRunner.query(`DROP TABLE "medications_patients"`);
    await queryRunner.query(`DROP TABLE "appointments"`);
    await queryRunner.query(`DROP TABLE "doctors"`);
    await queryRunner.query(`DROP TABLE "trataments"`);
    await queryRunner.query(`DROP TABLE "specializations_doctors"`);
    await queryRunner.query(`DROP TABLE "hospitals_work_doctors"`);
    await queryRunner.query(`DROP TABLE "hospitals"`);
    await queryRunner.query(`DROP TABLE "exams_patients"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
  }
}
