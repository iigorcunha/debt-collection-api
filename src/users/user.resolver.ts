import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import UserInput from './user.input';
import { UserService } from './user.service';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): Promise<User> {
    const user = await this.userService.create(input);

    return user;
  }
}
