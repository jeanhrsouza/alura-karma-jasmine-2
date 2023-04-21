import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from '../photo-board.component';
import { PhotoBoardModule } from '../photo-board.module';
import { PhotoBoardService } from './photo-board.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'example 1',
      src: '',
    },
    {
      id: 2,
      description: 'example 2',
      src: '',
    },
  ]
};

describe(PhotoBoardComponent.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //httpclienttestingmodule tem algumas funções a mais que o HttpClientModule
      //para isso, precisa de um controlador de requisições.
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    });

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });


  it(`#${PhotoBoardService.prototype.getPhotos.name} should return photos with description in uppercase`, done => {




    service.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
      done();
    });

    /**
     * httpController tem que ficar depois do subscribe, pois ele é o responsável por
     * fazer a requisição. Se ele ficar antes, a requisição não será feita.     *
     */

    httpController
      .expectOne(mockData.api)
      .flush(mockData.data);

  });

});
