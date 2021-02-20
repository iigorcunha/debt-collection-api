import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class DebtorInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  cnpjCpf: string;

  @Field()
  rgIe: string;

  @Field()
  isPerson: boolean;

  @Field()
  address: string;

  @Field()
  postalCode: string;

  @Field()
  number: string;

  @Field({ nullable: true })
  complement: string;

  @Field()
  neighborhood: string;

  @Field()
  city: string;

  @Field()
  state: string;
}
