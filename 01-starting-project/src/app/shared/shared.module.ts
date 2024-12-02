import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  /* La llave 'exports' define los módulos que no solo son necesarios internamente para los módulos que se declaren
  aquí, sino que también deben estar disponibles para cualquier otro módulo que potencialmente importe el módulo
  'shared' */
})
export class SharedModule {}
