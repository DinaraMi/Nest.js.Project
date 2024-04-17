import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Джон Доу', description: 'Имя пользователя' })
  @Column()
  name: string;

  @ApiProperty({ example: '1990-01-01', description: 'Дата рождения пользователя' })
  @Column()
  birthday: string;

  @ApiProperty({ example: 'john_doe', description: 'Логин пользователя' })
  @Column()
  login: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email адрес пользователя' })
  @Column()
  email: string;

  @ApiProperty({ example: 'Пароль@123', description: 'Пароль пользователя' })
  @Column()
  password: string;
}
