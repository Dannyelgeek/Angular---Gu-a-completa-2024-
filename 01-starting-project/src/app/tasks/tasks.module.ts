import { NgModule } from '@angular/core';

import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { CardComponent } from '../shared/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TasksComponent, AddTaskComponent, TaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
