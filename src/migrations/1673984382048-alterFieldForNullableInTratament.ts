import { MigrationInterface, QueryRunner } from "typeorm";

export class alterFieldForNullableInTratament1673984382048 implements MigrationInterface {
    name = 'alterFieldForNullableInTratament1673984382048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trataments" ALTER COLUMN "final_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medications_patients" ALTER COLUMN "final_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vaccines_patients" DROP COLUMN "next_dose"`);
        await queryRunner.query(`ALTER TABLE "vaccines_patients" ADD "next_dose" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vaccines_patients" DROP COLUMN "next_dose"`);
        await queryRunner.query(`ALTER TABLE "vaccines_patients" ADD "next_dose" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medications_patients" ALTER COLUMN "final_date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "trataments" ALTER COLUMN "final_date" SET NOT NULL`);
    }

}
