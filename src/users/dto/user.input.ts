import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  password: string;

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
