import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  constructor(private router: Router) {
    if (!localStorage.getItem('token')) this.router.navigate(['/login']);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  checkLocalStorage(key: string) :boolean{
    return localStorage.getItem(key) ? true : false;
  }
  

}
