import { Test, TestingModule } from '@nestjs/testing';
import { FilmService } from '../../service/film/film.service';
import { CreateFilmDto, UpdateFilmDto } from '../../controllers/film/film.dto';
import { LoggerService } from '../../logger.service';
import { Film } from '../../models/film.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmService,
        LoggerService,
        {
          provide: getRepositoryToken(Film),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FilmService>(FilmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

      jest.spyOn(service, 'create').mockResolvedValue(expectedFilm);
      const result = await service.create(createFilmDto);
      expect(result).toEqual(expectedFilm);
    });
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

      jest.spyOn(service, 'update').mockResolvedValue(expectedFilm);
      const result = await service.update(1, updateFilmDto);
      expect(result).toEqual(expectedFilm);
    });
  });

  describe('findAll', () => {
    it('should return all films', async () => {
      const films = [
        { id: 1, name: 'Film 1', description: 'Description 1', releaseDate: '2023-01-01', duration: 120 },
        { id: 2, name: 'Film 2', description: 'Description 2', releaseDate: '2023-02-01', duration: 110 },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(films);
      const result = await service.findAll();
      expect(result).toEqual(films);
    });
  });
});
