import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Film {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор фильма' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Звездные войны', description: 'Название фильма' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Эпическая космическая сага', description: 'Описание фильма' })
  @Column()
  description: string;

  @ApiProperty({ example: '1977-05-25', description: 'Дата релиза фильма' })
  @Column()
  releaseDate: string;

  @ApiProperty({ example: 120, description: 'Продолжительность фильма в минутах' })
  @Column()
  duration: number;
}
