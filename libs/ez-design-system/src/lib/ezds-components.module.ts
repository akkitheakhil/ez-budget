import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';


const components = [ButtonComponent, IconButtonComponent];

@NgModule({
  declarations: [...components,],
  imports: [CommonModule, FontAwesomeModule],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EZDSComponentsModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}
