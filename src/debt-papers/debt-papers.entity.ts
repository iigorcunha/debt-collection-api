import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Company } from '../company/company.entity';
import { Debtor } from '../debtor/debtor.entity';

@Entity({ name: 'debt_papers' })
@ObjectType()
export class DebtPaper extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  quota: number;

  @Field()
  @Column()
  balance: number;

  @Field()
  @Column({ name: 'debt_value' })
  debtValue: number;

  @Field()
  @Column({ name: 'payment_value' })
  paymentValue: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  payday: Date;

  @Column({ nullable: true, name: 'company_id' })
  companyId: string;

  @JoinColumn({ name: 'company_id' })
  @ManyToOne(() => Company)
  company: Company;

  @Column({ nullable: true, name: 'debtor_id' })
  debtorId: string;

  @JoinColumn({ name: 'debtor_id' })
  @ManyToOne(() => Debtor)
  debtor: Debtor;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
