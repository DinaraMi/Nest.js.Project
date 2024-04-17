import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsDateString, ValidateIf, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Marie Jon', description: 'Имя пользователя' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '1990-01-01', description: 'Дата рождения пользователя' })
  @IsDateString()
  @ValidateIf(o => !!o.birthday)
  birthday: string;

  @ApiProperty({ example: 'john_doe', description: 'Логин пользователя' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email адрес пользователя' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Пароль!1@123', description: 'Пароль пользователя' })
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{8,}$/, { message: 'Password too weak' })
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({ example: 'Marie Jon', description: 'Имя пользователя' })
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({ example: '1990-01-01', description: 'Дата рождения пользователя' })
  @IsDateString()
  @ValidateIf(o => !!o.birthday)
  birthday?: string;

  @ApiProperty({ example: 'john_doe', description: 'Логин пользователя' })
  @IsNotEmpty()
  @IsString()
  login?: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email адрес пользователя' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'Пароль!1@123', description: 'Пароль пользователя' })
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{8,}$/, { message: 'Password too weak' })
  password?: string;
}