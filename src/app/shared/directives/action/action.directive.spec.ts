import { ActionDirectiveModule } from './action.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;

  let component: ActionDirectiveTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
    //Recebendo div do componente
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');

    //Criando e emitindo evento
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    //Recebendo div do componente
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');

    //Criando e emitindo evento do tipo clique
    const event = new Event('click');
    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked or ENTER key pressed`, () => {
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const clickEvent = new Event('click');
    const keyBoardEvent = new KeyboardEvent('keyup', { key: 'Enter' });

    divEl.dispatchEvent(clickEvent);
    expect(component.hasEvent()).withContext('Click event').toBe(true);

    component.resetForNewExpectation();

    divEl.dispatchEvent(keyBoardEvent);
    expect(component.hasEvent())
      .withContext('Keyboard event "keyup"')
      .toBe(true);
  });
});

/**
 * Criando componente mockado
 */
@Component({
  template: `
    <div class="dummy-component" (appAction)="actionHandler($event)"></div>
  `,
})
class ActionDirectiveTestComponent {
  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    // ao utilizar !! a variável é convertida para boolean;
    return !!this.event;
  }

  public resetForNewExpectation(): void {
    this.event = null;
  }
}
