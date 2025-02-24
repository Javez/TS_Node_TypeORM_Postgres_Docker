import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostDescription1740411057990 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('post', 'content', 'description');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('post', 'description', 'content');
    }
}
