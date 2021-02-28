import { Field, InputType } from '@nestjs/graphql';
import { Company } from 'src/company/company.entity';

@InputType()
export default class DebtPaperInput {
  @Field()
  code: string;

  @Field()
  quota: number;

  @Field()
  balance: number;

  @Field()
  debtValue: number;

  @Field()
  paymentValue: number;

  @Field({ nullable: true })
  payday: Date;

  @Field({ nullable: true })
  companyId: string;

  @Field({ nullable: true })
  debtorId: string;
}
