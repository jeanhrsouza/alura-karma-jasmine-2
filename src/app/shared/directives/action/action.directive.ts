import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAction]',
})
export class ActionDirective {
  /**
   * Para que ter uma diretiva que possa passar o Evento
   * basta passar um output
   * <div (appAction)="EventoPassado()"
   */

  @Output() public appAction: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public handleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  public handleKeyup(event: KeyboardEvent): void {
    this.appAction.emit(event);
  }
}
