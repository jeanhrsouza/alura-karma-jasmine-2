import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PhotoBoardService } from './shared/components/photo-board/service/photo-board.service';
import { Photo } from './shared/components/photo-board/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}

  public ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
