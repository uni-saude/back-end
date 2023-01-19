import { MigrationInterface, QueryRunner } from "typeorm";

export class alterFieldForNullableInExam1673964535250 implements MigrationInterface {
    name = 'alterFieldForNullableInExam1673964535250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams_patients" ALTER COLUMN "date_apply" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams_patients" ALTER COLUMN "date_apply" SET NOT NULL`);
    }

}
