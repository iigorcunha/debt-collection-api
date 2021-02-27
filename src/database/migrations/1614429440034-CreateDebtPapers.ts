import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateDebtPapers1614429440034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'debt_papers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'code',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'quota',
            type: 'integer',
          },
          {
            name: 'balance',
            type: 'decimal',
          },
          {
            name: 'debt_value',
            type: 'decimal',
          },
          {
            name: 'payment_value',
            type: 'decimal',
          },
          {
            name: 'payday',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'company_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'debtor_id',
            type: 'uuid',
            isNullable: true,
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

    await queryRunner.createForeignKey(
      'debt_papers',
      new TableForeignKey({
        name: 'DebtorDebtPaperFK',
        columnNames: ['debtor_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'debtors',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'debt_papers',
      new TableForeignKey({
        name: 'CompanyDebtPaperFK',
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('debt_papers', 'CompanyDebtPaperFK');
    await queryRunner.dropForeignKey('debt_papers', 'DebtorDebtPaperFK');

    await queryRunner.dropTable('debt_papers');
  }
}
