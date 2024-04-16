import { IsNotEmpty, IsString, MaxLength, IsDate, MinDate, IsPositive } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @MaxLength(200)
  description: string;

  @IsDate()
  @MinDate(new Date('1895-12-28'))
  releaseDate: number;

  @IsPositive()
  duration: number;
}

export class UpdateFilmDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsString()
  @MaxLength(200)
  description?: string;

  @IsDate()
  @MinDate(new Date('1895-12-28'))
  releaseDate?: number;

  @IsPositive()
  duration?: number;
}