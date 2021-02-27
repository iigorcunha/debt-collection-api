import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Company } from 'src/company/company.entity';
import { Debtor } from 'src/debtor/debtor.entity';

@ObjectType()
@Entity({ name: 'debt_papers' })
export class DebtPaper {
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

  @Field()
  @Column({ nullable: true })
  payday: Date;

  @Column({ nullable: true })
  company_id: string;

  @JoinColumn({ name: 'company_id' })
  @ManyToOne(() => Company)
  @Field()
  company: Company;

  @Column({ nullable: true })
  debtor_id: string;

  @JoinColumn({ name: 'debtor_id' })
  @ManyToOne(() => Debtor)
  @Field()
  debtor: Debtor;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
