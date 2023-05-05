import { Component } from '@angular/core';
import { Difficulty, Level, Status } from 'src/app/constants/const.enum';
import { Ilist } from 'src/app/interface/task.interface';
import { UserServiceService } from 'src/app/service/service/user/user-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor( private taskstore: UserServiceService){}

  tasks: Ilist = {
    Name: '',
    Status: Status.success,
    Difficulty: Difficulty.Very_Hard,
    Level: Level.in_progress,
    TaskId: '',
    StartDate: '',
    DueDate: '',
    id: 0,
  }

  saveTask(){
   this.taskstore.addTask(this.tasks)
   this.taskstore.addTasks(this.tasks)
  }
}
