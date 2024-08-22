import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1724318307068 implements MigrationInterface {
    name = ' $npmConfigName1724318307068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isVerified"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isVerified" boolean NOT NULL DEFAULT false`);
    }

}
