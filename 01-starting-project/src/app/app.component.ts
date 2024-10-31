import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
/* El decorador '@component' añade metadatos a la clase 'AppComponent' y le dice a Angular
que trate esta clase como un componente, este decorador recibe un objeto como argumento para configurar
el componente, la propiedad 'selector' le dice a Angular que elementos debe buscar en el codigo HTML
para reemplazarlos por el marcado contenido en el archivo HTML propio de este componente y que es asignado
a la propiedad 'templateUrl' del objeto. La propiedad 'imports' del objeto recibe un array de importaciones
que permite usar un componente dentro de otro declarando su nombre, en este caso 'HeaderComponent' */
export class AppComponent {
  /* Esta clase 'AppComponent' es exportada de este archivo para ser utilizada en la función
  'bootstrapApplication()' del archivo 'main.ts' */

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectuser(id: string) {
    this.selectedUserId = id;
  }
  /* Este método espera obtener el 'id' de tipo 'string' de un usuario para mostrarlo en consola  */
}
