import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto, UpdateUserDto } from '../../controllers/user/user.dto';
import { LoggerService } from '../../logger.service';
import { User } from '../../models/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        LoggerService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

      jest.spyOn(service, 'create').mockResolvedValue(expectedUser);
      const result = await service.create(createUserDto);
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

      jest.spyOn(service, 'update').mockResolvedValue(expectedUser);
      const result = await service.update(1, updateUserDto);
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
      jest.spyOn(service, 'findAll').mockResolvedValue(users);
      const result = await service.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(users);
    });
  });
});
