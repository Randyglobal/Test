import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { LocalstoreService } from '../../localstore.service';
import { Ilist } from 'src/app/interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  data: any;

  constructor( private Store: StoreService, private SecondStore: LocalstoreService) { }

  //AddTask
  // addTask(task: Ilist){
  //   let mytask = this.SecondStore.get('Task');
  //   let storage = Object[] = [];
  //   // if(mytask.status && mytask.data.length > 1 ){
  //   //   mytask.data.push(task)
  //   //   this.Store.set('Task', task);
  //   //   return
  //   // }

  // }
  addTask(task: Ilist){
    const setToStorage = this.SecondStore.get('Task');
    let storeLocally: Object[] = [];
    if (setToStorage.status == true) {
      storeLocally = setToStorage.data;
      // console.log(setToStorage);
  }
    storeLocally.push(task);
    this.SecondStore.set('Task', storeLocally);
    alert('Task Added')
    return;
  }
  addTasks(task: Ilist){
    const setToStorage = this.Store.get('Task');
    let storeLocally: Object[] = [];
    if (setToStorage.status == true) {
      storeLocally = setToStorage.data;
      // console.log(setToStorage);
  }
    storeLocally.push(task);
    this.Store.set('Task', storeLocally);
    alert('Task Added');
    if (this.Store.set('Task', storeLocally) == true) {
      window.location.replace("http://localhost:62369/list")
    }
    console.log(this.Store);
    //Check Why the status, difficulty, level is not working
    return;
  }

  getTask(){
    return this.Store.get('Task')
  }
  getTasks(){
    return this.SecondStore.get('Task')
  }
  //Delete task
  deleteTask(id: number){
    return sessionStorage.removeItem("Task")
   }
   permenentDelete(id: number){
    return localStorage.removeItem("Task")
   }
}
