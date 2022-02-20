import { PhotoFrameModule } from './photo-frame.module';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFramecomponent } from './photo-frame.component';

describe(PhotoFramecomponent.name, () => {
  let fixture: ComponentFixture<PhotoFramecomponent> = null;
  let component: PhotoFramecomponent;

  //Por convenção do Angular,  é  bom utilizar o async  no beforeEach.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFramecomponent);
    component = fixture.componentInstance;
  });

  it(`Should create  component`, () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFramecomponent.prototype.like.name}
  should trigger (@Output liked) once when called
  multiple times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    /**
     * Por ser um output property, é possível fazer um subscribe.
     * Toda bez que for chamado essa função, será incrementado o número de times.
     */
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));

  it(`#${PhotoFramecomponent.prototype.like.name}
  should trigger (@Output liked) two times when
  called outside debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(times).toBe(2);
  }));

  it(`(D) Should display number of likes when (@Input likes) is incremented`, () => {
    fixture.detectChanges(); // Iniciou o cicloi de vida do ngOnInit
    component.likes++; //Incrementou o número de likes
    fixture.detectChanges(); //Chamou novamente o ciclo para  que possa alterar o DOM

    //↓↓↓Sugestão é tipar o element  sempre  genérico, caso houver refatoração, da menos trabalho
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter'); //Acessando o valor do DOM

    expect(element.textContent.trim()).toBe('1');
  });

  it(`(D) Should update aria-label when (@Input likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it(`(D) Should have aria-label with 0 (@Input likes)`, () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it(`(D) Should display image with src and description when bound to properties`, () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg';
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
