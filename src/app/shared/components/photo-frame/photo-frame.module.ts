import { PhotoFramecomponent } from './photo-frame.component';
import { LikeWidgetModule } from './../like-widget/like-widget.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoFramecomponent],
  imports: [CommonModule, LikeWidgetModule],
  exports: [PhotoFramecomponent],
})
export class PhotoFrameModule {}
