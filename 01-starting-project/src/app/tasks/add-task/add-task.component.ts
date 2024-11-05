import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './add-new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  /* Se importa el módulo 'FormsModule' para poder registrar el uso de la directiva '[(ng-model)]=""' */
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  /* 'void' es un tipo especial de dato que hace que el 'EventEmitter' no emita ningún dato */

  /* Las siguientes propiedades serán usadas para almacenar los valores que se introduzcan en el formulario usando
  el 'two-way bindnind' */
  enteredTitle = '';
  enteredSumary = '';
  enteredDate = '';

  private taskService = inject(TasksService);
  /* La función 'inject()' se usa como mecanismo de inyección de dependencias alternativo a la función 'constructor()'
  donde se pasa es servicio 'TasksService' como parámetro */

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSumary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }

  /* método que se vincula con el evento 'ngSubmit' y utiliza las propiedades del formulario para construir una nueva
  tarea */
}
