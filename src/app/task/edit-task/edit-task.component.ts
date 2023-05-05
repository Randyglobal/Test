import { Component, OnInit } from '@angular/core';
import { Difficulty, Level, Status } from 'src/app/constants/const.enum';
import { Ilist } from 'src/app/interface/task.interface';
import { UserServiceService } from 'src/app/service/service/user/user-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit{

  constructor( private EditTask: UserServiceService){}

  task: Ilist[] = [
    {
    Name:'',
    Status: Status.success,
    Difficulty: Difficulty.Medium,
    Level: Level.completed,
    TaskId: '',
    StartDate: new Date().getFullYear(),
    DueDate: new Date().getFullYear(),
    id: 1,
  }
]

  ngOnInit(): void {
    let allEditableTask = this.EditTask.getTasks();
    this.task = [...this.task, ...allEditableTask.data]
  }

}
