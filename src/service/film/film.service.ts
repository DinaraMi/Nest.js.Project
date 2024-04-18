import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerService } from '../../logger.service';
import { Film } from '../../models/film.entity';
import { CreateFilmDto, UpdateFilmDto } from '../../controllers/film/film.dto';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
    private readonly logger: LoggerService,
  ) {}

  async create(createFilmDto: CreateFilmDto): Promise<Film> {
    try {
      const newFilm = this.filmRepository.create(createFilmDto);
      const savedFilm = await this.filmRepository.save(newFilm);
      this.logger.log(`Film created: ${JSON.stringify(savedFilm)}`);
      return savedFilm;
    } catch (error) {
      this.logger.error(`Failed to create film: ${error.message}`);
      throw error;
    }
  } 

  async update(id: number, updateFilmDto: UpdateFilmDto): Promise<Film> {
    const filmToUpdate = await this.filmRepository.findOne({ where: { id } });
    if (!filmToUpdate) {
      throw new Error('Film not found');
    }
  
    try {
      const updatedFilm = Object.assign(filmToUpdate, updateFilmDto);
      const savedFilm = await this.filmRepository.save(updatedFilm);
      this.logger.log(`Film updated: ${JSON.stringify(savedFilm)}`);
      return savedFilm;
    } catch (error) {
      this.logger.error(`Failed to update film: ${error.message}`);
      throw error;
    }
  }   

  async findAll(): Promise<Film[]> {
    return await this.filmRepository.find();
  }
}
