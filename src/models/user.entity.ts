import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  login: string;

  @Column()
  email: string;

  @Column()
  password: string;
}