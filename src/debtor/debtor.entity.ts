import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Company } from 'src/company/company.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'debtors' })
export class Debtor {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column({ name: 'cnpj_cpf' })
  cnpjCpf: string;

  @Field()
  @Column({ name: 'rg_ie' })
  rgIe: string;

  @Field()
  @Column()
  isPerson: boolean;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column({ name: 'postal_code' })
  postalCode: string;

  @Field()
  @Column()
  number: string;

  @Field()
  @Column({ nullable: true })
  complement: string;

  @Field()
  @Column()
  neighborhood: string;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  state: string;

  @Column({ nullable: true, name: 'company_id' })
  companyId: string;

  @ManyToOne(() => Company, (company) => company.debtor)
  @Field(() => Company)
  company: Promise<Company>;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
