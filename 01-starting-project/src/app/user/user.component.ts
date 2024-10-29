import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
/* Esta constante obtiene un número aleatorio basado en la cantidad de usuarios en el array 'DUMMY_USERS'. */

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  /* En el cuerpo de una clase en TypeScript se pueden establecer propiedades sin usar 'let' o 'const' como se hace en
  JavaScript, esta propiedad puede ser usada dentro de la plantilla HTML de este componente. */

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  /* esto es un 'getter', que esencialmente es un método que devuelve un valor dinámico como
  "'assets/users/' + selectedUser.avatar" para mantener la plantilla HTML lo más simple posible.

  Un método es también utlilizado como una propiedad de la case dentro del componente.ts*/
}
