import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './models/user.entity';
import { Film } from './models/film.entity';
import { FilmController } from './controllers/film/film.controller';
import { UserController } from './controllers/user/user.controller';
import { FilmService } from './service/film/film.service';
import { UserService } from './service/user/user.service';
import { LoggerService } from './logger.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dinaratest',
      password: 'dinaratest',
      database: 'dinaratest',
      entities: [User, Film],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Film]),
  ],
  controllers: [AppController, FilmController, UserController],
  providers: [AppService, FilmService, UserService, LoggerService],
})
export class AppModule {}
