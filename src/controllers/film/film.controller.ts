import { Controller, Get, Post, Body, Put, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateFilmDto, UpdateFilmDto } from './film.dto';
import { FilmService } from 'src/service/film/film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }


  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param(':id') id:number, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(id, updateFilmDto);
  }

  @Get()
  findAll() {
    return this.filmService.findAll();
  }
}
