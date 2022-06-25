import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ezds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input()
  primary = true;

  @Input()
  size: 'small' | 'medium' | 'large' | 'full' = 'medium';

  @Input()
  label = 'Button';

  @Output()
  buttonClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'ezds-button--primary'
      : 'ezds-button--secondary';

    return ['ezds-button', `ezds-button--${this.size}`, mode];
  }
}
