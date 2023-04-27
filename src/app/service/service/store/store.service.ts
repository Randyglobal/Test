import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  data: any;

  constructor() { }

  private SessionStore = sessionStorage;

  set(key: string, data: any) {
    try {
     this.SessionStore.setItem(key, JSON.stringify(data));
     return true

    } catch (error) {
    return false

    }
  }

  get(key: string) {
    try {
    const response = JSON.parse(this.SessionStore.getItem(key) ?? '');
    return{
      status: true,
      data: response
    }
    } catch (error) {
     return{
      status: false,
      data: null
     }
    }
  }
}
