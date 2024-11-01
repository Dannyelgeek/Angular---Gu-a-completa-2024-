import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  /* 'void' es un tipo especial de dato que hace que el 'EventEmitter' no emita ningún dato */

  onCancel() {
    this.cancel.emit();
  }
}
