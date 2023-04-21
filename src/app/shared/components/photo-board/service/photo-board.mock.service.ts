import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { PhotoBoardService } from './photo-board.service';
import { Photo } from '../interfaces/photo';
import { buildPhotoList } from '../test/build-photo-list';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
