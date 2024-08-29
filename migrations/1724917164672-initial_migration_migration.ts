import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationMigration1724917164672 implements MigrationInterface {
    name = 'InitialMigrationMigration1724917164672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment_entity" ("id" uuid NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "home_page" character varying, "text" character varying NOT NULL, "photo" character varying, "post_id" character varying NOT NULL, "parent_comment" uuid, "created_at" character varying NOT NULL, "updated_at" character varying NOT NULL, CONSTRAINT "PK_5a439a16c76d63e046765cdb84f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comment_entity" ADD CONSTRAINT "FK_efbd1217a3a3466e841f1f5631f" FOREIGN KEY ("parent_comment") REFERENCES "comment_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_entity" DROP CONSTRAINT "FK_efbd1217a3a3466e841f1f5631f"`);
        await queryRunner.query(`DROP TABLE "comment_entity"`);
    }

}
