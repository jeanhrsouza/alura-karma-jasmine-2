import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  multiple times within debounce time`, () => {
    fixture.detectChanges();
    let times = 0;
    /**
     * Por ser um output property, é possível fazer um subscribe.
     * Toda bez que for chamado essa função, será incrementado o número de times.
     */
    component.liked.subscribe(() => times++);
    component.like();
    component.like();

    expect(times).toBe(1);
  });
});
