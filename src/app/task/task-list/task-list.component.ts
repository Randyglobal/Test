import { Component } from '@angular/core';
import { Difficulty, Level, Status } from 'src/app/constants/const.enum';
import { Ilist } from 'src/app/interface/task.interface';
import { UserServiceService } from 'src/app/service/service/user/user-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor( private taskList: UserServiceService){}
  tasks: Ilist [] = [
    {
      Name: 'Tutorial Website',
      Status: Status.success,
      Difficulty: Difficulty.Very_Hard,
      Level: Level.completed,
      TaskId: 'TT354S',
      StartDate: new Date().getFullYear(),
      DueDate: '23/04/2023',
    },
    {
      Name: 'Youtube Clone',
      Status: Status.pending,
      Difficulty: Difficulty.Medium,
      Level: Level.in_progress,
      TaskId: 'TY4435H',
      StartDate: new Date().getFullYear(),
      DueDate: '01/05/2023',
    },
  ]
//Uncomment
    ngOnInit(): void {
      let allTasks = this.taskList.getTask();
      // let allTheTaks= this.taskList.getTasks()
      this.tasks = [...this.tasks, ...allTasks.data];
      // this.tasks = [...this.tasks, ...allTheTaks.data]
    }
}
