import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1724318238290 implements MigrationInterface {
    name = ' $npmConfigName1724318238290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isVerified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isVerified"`);
    }

}
