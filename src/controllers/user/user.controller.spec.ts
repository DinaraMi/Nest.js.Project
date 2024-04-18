import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { LoggerService } from '../../logger.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../models/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        LoggerService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = { 
        "name": "Marie Jon",
        "birthday": "1990-01-01",
        "login": "john_doe",
        "email": "john@example.com",
        "password": "Пароль!1@123"
        };
      const expectedUser = { 
        "name": "Marie Jon",
        "birthday": "1990-01-01",
        "login": "john_doe",
        "email": "john@example.com",
        "password": "Пароль!1@123",
        "id": 1,
        };

      jest.spyOn(userService, 'create').mockResolvedValue(expectedUser);
      const result = await controller.create(createUserDto);
      expect(result).toEqual(expectedUser);
    });
  });

  describe('update', () => {
    it('should update an user', async () => {
      const updateUserDto: UpdateUserDto = { 
        "name": "Marie Jonson",
        "birthday": "1990-01-01",
        "login": "john",
        "email": "john@example.com",
        "password": "Пароль!1@123",
        };
      const expectedUser = { 
        "name": "Marie Jonson",
        "birthday": "1990-01-01",
        "login": "john",
        "email": "john@example.com",
        "password": "Пароль!1@123",
        "id": 1,
        };

      jest.spyOn(userService, 'update').mockResolvedValue(expectedUser);
      const result = await controller.update(1, updateUserDto);
      expect(result).toEqual(expectedUser);
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const users = [
        { id: 1, 
          name: 'User 1', 
          email: 'user1@example.com',
          birthday: "1990-01-01",
          login: "john_doe",
          password: "Пароль@123"
        },
        { id: 2, 
          name: 'User 2', 
          email: 'user2@example.com', 
          birthday: "1990-01-01", 
          login: "john_doe",
          password: "Пароль@123"
        },
      ];
      jest.spyOn(userService, 'findAll').mockResolvedValue(users);
      const result = await controller.findAll();
      expect(userService.findAll).toHaveBeenCalled();
      expect(result).toEqual(users);
    });
  });
  
});
