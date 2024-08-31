import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveLevelColumnMigration1725098218377 implements MigrationInterface {
    name = 'RemoveLevelColumnMigration1725098218377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_entity" DROP COLUMN "level"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_entity" ADD "level" integer NOT NULL`);
    }

}
