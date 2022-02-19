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


});
