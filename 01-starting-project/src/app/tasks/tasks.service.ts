/* Un servicio en Angular, es una clase que es utilizada para la gestión de datos utilizados en uno o más
componentes */

import { Injectable } from '@angular/core';
import { NewTaskData } from './add-task/add-new-task.model';

@Injectable({ providedIn: 'root' })
/* El decorador '@Injectable()' es lo que distingue a un servivio de un componente, el cual tiene un objeto de
configuración como parametro que tiene como opción el 'providedIn' que se establece en 'root' */
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  /* Este método se usará fuera del servicio para obtener las tareas de los usuarios */

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getDate().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }
  /* Este método se usará fuera del servicio para añadir tareas de los usuarios al array 'tasks' */

  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  /* Este método se usará fuera del servicio para eliminar tareas de los usuarios del array 'tasks' */
}