import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFollowTable1724663256839 implements MigrationInterface {
    name = 'AddFollowTable1724663256839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "follows" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "follower_id" uuid NOT NULL, "following_id" uuid NOT NULL, CONSTRAINT "PK_8988f607744e16ff79da3b8a627" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP COLUMN "refreshToken"`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP COLUMN "deviceId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "title" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" ADD "article_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" ADD "refreshToken" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" ADD "deviceId" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" ADD CONSTRAINT "FK_978a28902773fba504719a8fff9" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_54b5dc2739f2dea57900933db66" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_c518e3988b9c057920afaf2d8c0" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_c518e3988b9c057920afaf2d8c0"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_54b5dc2739f2dea57900933db66"`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP CONSTRAINT "FK_978a28902773fba504719a8fff9"`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP COLUMN "deviceId"`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP COLUMN "refreshToken"`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" DROP COLUMN "article_id"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" ADD "deviceId" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "refresh_tokens" ADD "refreshToken" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "follows"`);
    }

}
