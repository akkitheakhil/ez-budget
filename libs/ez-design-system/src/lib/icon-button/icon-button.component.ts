import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getFAIcon, FAIcon } from '../icons/fa-icons';


@Component({
  selector: 'ezds-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  private _icon!: FAIcon;

  @Input()
  primary = true;

  @Input()
  transparent = false;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  set icon(value: string) {
    this._icon = getFAIcon(value);
  }

  get iconDefinition(): FAIcon {
    return this._icon;
  }

  @Output()
  buttonClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'ezds-icon-button--primary'
      : 'ezds-icon-button--secondary';

    const transparent = this.transparent ? 'ezds-icon-button--transparent' : '';

    return ['ezds-icon-button', `ezds-icon-button--${this.size}`, mode, transparent];
  }

}
