import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumnPasswordPatientsAndDoctors1673617180547 implements MigrationInterface {
    name = 'addColumnPasswordPatientsAndDoctors1673617180547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ADD "password" character varying(72) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "password" character varying(72) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "password"`);
    }

}
