import { MigrationInterface, QueryRunner } from "typeorm";

export class alterFieldForNullableInVaccine1673999447320 implements MigrationInterface {
    name = 'alterFieldForNullableInVaccine1673999447320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vaccines_patients" ALTER COLUMN "next_dose" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vaccines_patients" ALTER COLUMN "next_dose" SET NOT NULL`);
    }

}
