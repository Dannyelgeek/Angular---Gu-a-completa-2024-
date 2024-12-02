/* Un modulo es una caracteristica de Angular que existe por razones historicas, no es mas que una clase que
se exporta y se identifica con el decorador '@NgModule' */

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
/* El módulo 'BrowserModule' proporciona una colección de cosas que son necesarias para que cada aplicación
de Angular funcione correctamente, y debe ser importado en el módulo raíz que en este caso es 'AppModule' */

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [HeaderComponent, UserComponent, TasksComponent, BrowserModule],
})

/* Este decorador tiene un objeto de configuración que establece 'declarations' que es donde se registran los
componentes que necesiten trabajar juntos, los módulos y los componentes independientes son conceptos rivales
si se añade un componente al array 'declarations' no tiene que ser un componente independiente.

Otro elemento de confuguración es 'bootstrap' que tambien toma un array de todos los componentes raiz que se
quieran establecer, por lo general solo será 'AppComponent'

Si se quiere registrar un componente que es independiente, se tiene que agregar en un arrya del elemento de
configuración 'imports' */
export class AppModule {}
