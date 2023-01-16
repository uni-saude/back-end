import { MigrationInterface, QueryRunner } from "typeorm";

export class addDataSpecializations1673872955690 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        INSERT INTO specializations_doctors
            (name)
        VALUES
            ('Clínico Geral'),
            ('Cardiologista'),
            ('Psicólogo'),
            ('Dematologista'),
            ('Ginecologista'),
            ('Pediatra'),
            ('Gastroenterologista'),
            ('Infectologista');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
