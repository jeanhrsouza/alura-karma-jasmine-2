import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFramecomponent implements OnInit, OnDestroy {
  @Output() public liked: EventEmitter<void> = new EventEmitter();
  @Input() public description: string = '';
  @Input() public src: string = '';
  @Input() public likes: number = 0;
  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  public ngOnInit(): void {
    /*
     * esta implementação serve  para que o like seja emitido somente a cada 0.5 segundos, assim
     * evitando que seja chamado várias vezes a função.
     * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
     */
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribe)) //Emitir a função até que seja feito o destroy.
      .subscribe(() => {
        this.liked.emit();
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public like(): void {
    this.debounceSubject.next();
  }
}
