import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CompanyInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  cnpj: string;

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

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  email: string;
}
