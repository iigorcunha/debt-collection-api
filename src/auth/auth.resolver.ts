import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { AuthService } from './auth.service';
import { AuthType } from './dto/auth.type';

@Resolver(() => User)
export default class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthType)
  async login(
    @Args('cpf') cpf: string,
    @Args('password') password: string,
  ): Promise<AuthType> {
    const response = await this.authService.auth(cpf, password);

    return {
      user: response.user,
      token: response.token,
    };
  }
}
