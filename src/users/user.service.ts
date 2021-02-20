import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import UserInput from './dto/user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByID(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async findByCPF(cpf: string): Promise<User> {
    return this.userRepository.findOne({
      where: { cpf },
    });
  }

  async create({ name, email, cpf, password }: UserInput): Promise<User> {
    const hashedPassword = await hash(password, 10);
    // const hashedCPF = await hash(cpf, 10);
    const user = this.userRepository.create({
      name,
      email,
      cpf,
      password: hashedPassword,
    });
    await this.userRepository.save(user);
    return user;
  }
}
