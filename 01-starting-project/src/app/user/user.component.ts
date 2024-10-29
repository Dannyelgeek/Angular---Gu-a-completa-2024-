import { Component, computed, signal } from '@angular/core';
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
  /*
  selectedUser = DUMMY_USERS[randomIndex];

  En el cuerpo de una clase en TypeScript se pueden establecer propiedades sin usar 'let' o 'const' como se hace en
  JavaScript, esta propiedad puede ser usada dentro de la plantilla HTML de este componente. */

  selectedUser = signal(DUMMY_USERS[randomIndex]);
  /* 'Signal' es un sistema que gradualmente sigue cómo y dónde cambia un valor a lo largo de la aplicación
  esto optimiza la velocidad de renderización */

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  /* 'computed' es una función que se usa junto con 'signals' para que Angular automáticamente analice si se está
  leyendo algún valor de Señal dentro de la función que se pasa como argumento para compotarla, y si ese es el caso,
  Anuglar de nuevo establece una suscripción a esa Señal.

  Siempre que esa Señal reciba un nuevo valor, y solo entonces, Angular recomputará la ruta de la imagen aquí */

  /*
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  Esto es un 'getter', que esencialmente es un método que devuelve un valor dinámico como
  "'assets/users/' + selectedUser.avatar" para mantener la plantilla HTML lo más simple posible.

  Un método es también utlilizado como una propiedad de la case dentro del componente.ts*/

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
  /* Método utilizado para ejecutar una acción cuando se de click al botón en la plantilla HTML */
}
