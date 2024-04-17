import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsDate, MinDate, IsPositive } from 'class-validator';

export class CreateFilmDto {
  @ApiProperty({ example: 'The ocean', description: 'Название фильма' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Фильм о том то и том то', description: 'Описание фильма' })
  @IsString()
  @MaxLength(200)
  description: string;

  @ApiProperty({ example: '2024-01-01', description: 'Дата релиза фильма' })
  @IsDate()
  @MinDate(new Date('1895-12-28'))
  releaseDate: string;

  @ApiProperty({ example: 120, description: 'Продолжительность фильма в минутах' })
  @IsPositive()
  duration: number;
}

export class UpdateFilmDto {
  @ApiProperty({ example: 'The ocean', description: 'Название фильма' })
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'Фильм о том то и том то', description: 'Описание фильма' })
  @IsString()
  @MaxLength(200)
  description?: string;

  @ApiProperty({ example: '2024-01-01', description: 'Дата релиза фильма' })
  @IsDate()
  @MinDate(new Date('1895-12-28'))
  releaseDate?: string;

  @ApiProperty({ example: 120, description: 'Продолжительность фильма в минутах' })
  @IsPositive()
  duration?: number;
}