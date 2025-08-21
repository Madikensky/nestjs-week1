import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create({
      username: dto.username,
      email: dto.email,
      password: dto.password,
    });
    return await this.userRepository.save(user);
  }
}
