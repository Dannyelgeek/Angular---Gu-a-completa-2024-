import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  /* El signo de interrogación '?' le dice a TypeScript que la propiedad 'name' podría no estar configurada y que es
  consiente de ello, puede que la propiedad no esté inicializada y no pasará nada.

  Una alternativa al signo de interrogación sería definir un tipo 'unión' mediante el uso del signo de tubería '|'
  de la siguiente manera:

    @Input() name: string | undefined;

  Esot le dice a TypeScript que el tipo de valor que puede ser almacenado en esta propiedad es de tipo 'string' ó
  tipo 'undefined'  */
}
