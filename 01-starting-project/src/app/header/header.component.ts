import { Component } from '@angular/core';
/* El decorador '@Component' es importado del paquete '@angular/core' de Angular */

@Component(
  {
    selector: 'app-header',
    standalone: false,
    // imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
  }
  /* El nombre de la etiqueta 'app-header' es totalmente personalizable para poder diferenciarlo de la
etiqueta 'header' que HTML maneja por defecto. La propiedad 'standalone' marca al componente como
uno independiente, es desir que no se necesita de módulos para que este componente funcione en toda
la aplicación */
)
export class HeaderComponent {}
