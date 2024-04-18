import { Test, TestingModule } from '@nestjs/testing';
import { FilmController } from './film.controller';
import { CreateFilmDto, UpdateFilmDto } from './film.dto';
import { FilmService } from '../../service/film/film.service';
import { LoggerService } from '../../logger.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Film } from '../../models/film.entity';

describe('FilmController', () => {
  let controller: FilmController;
  let filmService: FilmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmController],
      providers: [
        FilmService,
        LoggerService,
        {
          provide: getRepositoryToken(Film),
          useValue: {},
        },
      ],
      
    }).compile();

    controller = module.get<FilmController>(FilmController);
    filmService = module.get<FilmService>(FilmService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new film', async () => {
      const createFilmDto: CreateFilmDto = {
        "name": "The ocean",
        "description": "Фильм о том то и том то",
        "releaseDate": "2024-01-01",
        "duration": 120
      };
      const expectedFilm = {
        "name": "The ocean",
        "description": "Фильм о том то и том то",
        "releaseDate": "2024-01-01",
        "duration": 120,
        "id": 1,
      };
      jest.spyOn(filmService, 'create').mockResolvedValue(expectedFilm);
      const result = await controller.create(createFilmDto);
      expect(result).toEqual(expectedFilm);
    })
  });

  describe('update', () => {
    it('should update a film', async () => {
      const updateFilmDto: UpdateFilmDto = {
        "name": "Updated Film",
        "description": "Updated description",
        "releaseDate": "2024-02-01",
        "duration": 150
      };
      const expectedFilm = {
        "name": "Updated Film",
        "description": "Updated description",
        "releaseDate": "2024-02-01",
        "duration": 150,
        "id": 1,
      };

      jest.spyOn(filmService, 'update').mockResolvedValue(expectedFilm);
      const result = await controller.update(1, updateFilmDto);
      expect(result).toEqual(expectedFilm);
    });
  });

  describe('findAll', () => {
    it('should return all films', async () => {
      const films = [
        { id: 1, name: 'Film 1', description: 'Description 1', releaseDate: '2023-01-01', duration: 120 },
        { id: 2, name: 'Film 2', description: 'Description 2', releaseDate: '2023-02-01', duration: 110 },
      ];

      jest.spyOn(filmService, 'findAll').mockResolvedValue(films);
      const result = await controller.findAll();
      expect(result).toEqual(films);
    });
  });
});
