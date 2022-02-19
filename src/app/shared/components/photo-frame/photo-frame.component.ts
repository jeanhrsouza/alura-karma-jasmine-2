import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFramecomponent {
  @Output() public liked: EventEmitter<void> = new EventEmitter();
  @Input() public description: string = '';
  @Input() public src: string = '';
  @Input() public likes: number = 0;

  public like(): void {
    this.liked.emit();
  }
}
