import { MigrationInterface, QueryRunner } from "typeorm";

export class renameFieldDateSolicitaionInExam1673965169331 implements MigrationInterface {
    name = 'renameFieldDateSolicitaionInExam1673965169331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams_patients" RENAME COLUMN "data_solicitation" TO "date_solicitation"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams_patients" RENAME COLUMN "date_solicitation" TO "data_solicitation"`);
    }

}
