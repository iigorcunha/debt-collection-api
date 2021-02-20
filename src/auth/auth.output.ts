import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class AuthOutput {
  @Field()
  access_token: string;
}
