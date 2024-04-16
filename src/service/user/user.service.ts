import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from 'src/controllers/user/user.dto';
import { LoggerService } from 'src/logger.service';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly logger: LoggerService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(createUserDto);
      const savedUser = await this.userRepository.save(newUser);
      this.logger.log(`User created: ${JSON.stringify(savedUser)}`);
      return savedUser;
    } catch (error) {
      this.logger.error(`Failed to create user: ${error.message}`);
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const userToUpdate = await this.userRepository.findOne({ where: { id } });
    if (!userToUpdate) {
      throw new Error('User not found');
    }
  
    try {
      const updatedUser = Object.assign(userToUpdate, updateUserDto);
      const savedUser = await this.userRepository.save(updatedUser);
      this.logger.log(`User updated: ${JSON.stringify(savedUser)}`);
      return savedUser;
    } catch (error) {
      this.logger.error(`Failed to update user: ${error.message}`);
      throw error;
    }
  }   

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
