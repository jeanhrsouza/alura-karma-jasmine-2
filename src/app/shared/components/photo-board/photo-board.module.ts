import { PhotoBoardComponent } from './photo-board.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFrameModule } from './../photo-frame/photo-frame.module';

@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoardComponent],
})
export class PhotoBoardModule {}
