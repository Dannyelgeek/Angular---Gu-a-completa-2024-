import { Component } from '@angular/core';
/* El decorador '@Component' es importado del paquete '@angular/core' de Angular */

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
