import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqeForLikes1725636186187 implements MigrationInterface {
    name = 'AddUniqeForLikes1725636186187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE ("name")`);
        await queryRunner.query(`CREATE INDEX "IDX_9769b295a8d670435ce210ba15" ON "refresh_tokens" ("deviceId") `);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "UQ_af90adc46c549b2a7ee83c6e442" UNIQUE ("user_id", "article_id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "UQ_af90adc46c549b2a7ee83c6e442"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9769b295a8d670435ce210ba15"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "UQ_d90243459a697eadb8ad56e9092"`);
    }

}
