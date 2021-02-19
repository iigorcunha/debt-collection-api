import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { AuthService } from './auth.service';

@Resolver(() => User)
export default class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(@Args('cpf') cpf: string, @Args('password') password: string) {
    const auth = await this.authService.auth(cpf, password);

    return auth;
  }
}
