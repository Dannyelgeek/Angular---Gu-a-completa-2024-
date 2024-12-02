import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
/* import { DUMMY_USERS } from '../dummy-users'; */

/*
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

Esta constante obtiene un número aleatorio basado en la cantidad de usuarios en el array 'DUMMY_USERS'. */

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /*
  selectedUser = DUMMY_USERS[randomIndex];

  En el cuerpo de una clase en TypeScript se pueden establecer propiedades sin usar 'let' o 'const' como se hace en
  JavaScript, esta propiedad puede ser usada dentro de la plantilla HTML de este componente.


  selectedUser = signal(DUMMY_USERS[randomIndex]);

  'Signal' es un sistema que gradualmente sigue cómo y dónde cambia un valor a lo largo de la aplicación
  esto optimiza la velocidad de renderización


  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  'computed' es una función que se usa junto con 'signals' para que Angular automáticamente analice si se está
  leyendo algún valor de Señal dentro de la función que se pasa como argumento para compotarla, y si ese es el caso,
  Anuglar de nuevo establece una suscripción a esa Señal.

  Siempre que esa Señal reciba un nuevo valor, y solo entonces, Angular recomputará la ruta de la imagen aquí


  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  Esto es un 'getter', que esencialmente es un método que devuelve un valor dinámico como
  "'assets/users/' + selectedUser.avatar" para mantener la plantilla HTML lo más simple posible.

  Un método es también utlilizado como una propiedad de la case dentro del componente.ts*/

  /*
  @Input({ required: true }) avatar!: string;

  El decoraador '@Input()' indica que la propiedad 'avatar' será configurable desde el exterior, TypeScript pide
  a este tipo de propiedades que se le especifique explicitamente el tipo de dato se recibe, en este caso será un
  'string' y también se coloca el signo de exclamación '!' que indica que sabemos que esta propiedad
  definitivamente se establecerá en algún valor, aunque no pueda verlo en este código*/

  /*
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  Al usar la opción 'required: true' dentro de '@Input' le estas diciendo a Angular que esta propiedad debe ser
  establecida, y eso toma sentido al usar el signo de exclamación para decirle a TypeScript que siempre se le
  asignará un valor a la propiedad */

  /*
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };

  Para simplificar el código se puede configurar una sola propiedad de entrada 'user' con un tipado complejo
  usando un objeto con múltiples propiedades donde todas esas propiedades tambien tienen diferentes tipos de valores,
  a esto se le denomina un 'tipo de objeto' utilizando las llaves '{}' tal como si se creara un ojeto literal,
  esto no quiere decir que se está creando un objeto sino que se esta creando un tipo con proiedades específicas. */

  @Input({ required: true }) user!: User;

  /* Aunque lo más común es exteriorizar el 'tipo de objeto' ya sea usando las palabras clave 'type' o 'interface'
 para que el código sea más simple aún, y el tipado solo sea llamar al propio tipo creado fuera de la clase,
 usando su nombre 'User' */

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  /*
  avatar = input.required<string>();

  name = input.required<string>();

  Esta función 'input()' es diferente al decorador '@Input' y le dice a Angular que la propiedad 'avatar' dece ser
  una entrada a este componente para que se esablezca como un atributo cuando se utiliza ese componente, también
  permite asignar un valor por defecto que se asumirá ai aun no se ha recibido ningún valor de entrada, por ejemplo,
  una cadena vacía ('')

  Alternativamente tambien puede no pasarse un valor inicial y decirle a Angular que eventualmente se recibirá un
  valor de un tipo diferente mediante parentesis angulares (<>, a esto se le llama 'tipo generico') despues de el
  nombre de la función y antes de las parentesis normales

  imagePath = computed(() => 'assets/users/' + this.avatar());
  */

  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  /*
  El decorador '@Output()' y la instancia 'EventEmitter()' permite emitir valores persolanizados a treves de
  la propiedad 'select' a cualquier componente padre que esté interesado, aquí también se puede usar el tipado
  generico para decirle aTypeScript el tipo de dato que se piensa emitir */

  /*
  select = output<string>()

  La función 'output()' le dice a Angular que la propiedad 'select' debe ser una salida tal y como lo
  hace el decorador '@Output()' y que debe almacenar un emisor de eventos  */

  onSelectUser() {
    /* const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); */

    this.select.emit(this.user.id);

    /* El método 'emit()' permitira a la función 'onSelectUser()' emitir un nuevo valor */
  }
  /* Método utilizado para ejecutar una acción cuando se de click al botón en la plantilla HTML */
}
