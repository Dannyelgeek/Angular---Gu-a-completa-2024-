import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { type NewTaskData } from './add-task/add-new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  /* El signo de interrogación '?' le dice a TypeScript que la propiedad 'name' podría no estar configurada y que es
  consiente de ello, puede que la propiedad no esté inicializada y no pasará nada.

  Una alternativa al signo de interrogación sería definir un tipo 'unión' mediante el uso del signo de tubería '|'
  de la siguiente manera:

    @Input() name: string | undefined;

  Esot le dice a TypeScript que el tipo de valor que puede ser almacenado en esta propiedad es de tipo 'string' ó
  tipo 'undefined'  */

  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {
    /* para utilizar un servicio dentro de un componente primero hay que instanciarlo, esto se hace añadiendo una nueva
    propiedad privada */
  }

  /* La inyección de dependencias es un mecanismo utilizado junto con los servicios cuya idea es que no creas esta
  instancia por tu cuenta, sino que le dices a Angular que necesitas tal instancia y dejas que Angular la cree,
  para utilizar la inyección de dependencias es necesaria la finción 'constructor()' la cual se ejecutará
  automáticamente por Angular cuando la clase del componente es instanciada, por lo tanto, le dices a Angular acerca de
  las dependencias que necesitas simplemente añadiendola como un parametro a la funció 'constructor()'  */

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
