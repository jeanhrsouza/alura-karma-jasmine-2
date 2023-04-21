import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './interfaces/photo';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

/*
  Esses testes são feitos para testar o componente a partir de um componente mockado.
  O componente mockado é um componente que é criado apenas para testar o componente que queremos testar.
  Está sendo utilizado para testar o componente PhotoBoardComponent sem que seja utilizado o ngOnChanges.

  Não é uma boa prática testar o ngOnChanges, pois não temos a total visão e o total controle do que está acontecendo.

  É recomendando utilizar a abordagem do photo-board.component.spec.ts.
 */
describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardTestComponent>;
  let component: PhotoBoardTestComponent;

  function buildPhotoList(): Photo[] {
    const photos: Photo[] = [];
    for (let i = 0; i < 8; i++) {
      photos.push({
        id: i + 1,
        url: '',
        description: '',
      });
    }
    return photos;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    expect(component.board.rows.length).withContext('Number of rows').toBe(2);

    expect(component.board.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);

    expect(component.board.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});

@Component({
  template: ` <app-photo-board [photos]="photos"></app-photo-board> `,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}
