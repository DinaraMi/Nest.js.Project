import { Controller, Get, Post, Body, Put, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateFilmDto, UpdateFilmDto } from './film.dto';
import { FilmService } from 'src/service/film/film.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Film } from 'src/models/film.entity';

@ApiTags('Фильмы')
@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @ApiOperation({summary: 'Добавление фильма'})
  @ApiResponse({status: 200, type: Film})
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }

  @ApiOperation({summary: 'Редактирование фильма'})
  @ApiResponse({status: 200, type: Film})
  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param(':id') id:number, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(id, updateFilmDto);
  }

  @ApiOperation({summary: 'Получение всех фильмов'})
  @ApiResponse({status: 200, type: Film})
  @Get()
  findAll() {
    return this.filmService.findAll();
  }
}
