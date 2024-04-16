import { IsNotEmpty, IsString, IsEmail, IsDateString, ValidateIf, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDateString()
  @ValidateIf(o => !!o.birthday)
  birthday: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{8,}$/, { message: 'Password too weak' })
  password: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsDateString()
  @ValidateIf(o => !!o.birthday)
  birthday?: string;

  @IsNotEmpty()
  @IsString()
  login?: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{8,}$/, { message: 'Password too weak' })
  password?: string;
}