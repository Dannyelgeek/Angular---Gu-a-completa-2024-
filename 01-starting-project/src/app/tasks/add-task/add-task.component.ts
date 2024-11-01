import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  /* Se importa el módulo 'FormsModule' para poder registrar el uso de la directiva '[(ng-model)]=""' */
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  /* 'void' es un tipo especial de dato que hace que el 'EventEmitter' no emita ningún dato */

  /* Las siguientes propiedades serán usadas para almacenar los valores que se introduzcan en el formulario usando
  el 'two-way bindnind' */
  enteredTitle = '';
  enteredSumary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }
}
