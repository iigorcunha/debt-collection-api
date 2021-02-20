import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDebtors1613860037664 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'debtors',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'code',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'cnpj_cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'rg_ie',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'isPerson',
            type: 'boolean',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'postal_code',
            type: 'varchar',
          },
          {
            name: 'number',
            type: 'varchar',
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('debtors');
  }
}
