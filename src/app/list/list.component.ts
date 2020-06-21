import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import baseUrl from '../api.baseurl';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  list = [];
  name: string;
  loaded: boolean = false;
  item = new FormControl('', [
    Validators.required
  ]);
  constructor(private router:Router) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
      fetch(baseUrl.baseURL+"/api/items", {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":token
        }
        
      }).then(res => {
        if(!res.ok) throw new Error("cannot edit finish");
        
        return res.json()
      }).then((res) => {
        this.list = res.items;
        this.name = res.name;
        this.loaded = true;
      }).catch(() => {
        this.router.navigate(['/']);
      });;
   }
  addItem() {
    if (this.item.value.trim()) {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['/login']);
      }
      let data = {
        "text": this.item.value.trim(),
        "done":false
      }
      fetch(baseUrl.baseURL+"/api/item", {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":token
        },
        body: JSON.stringify(data)
        
      }).then(res => {
        if(!res.ok) throw new Error("cannot edit finish");
        
        return res.json();
      }).then((res) => {
        this.list = res;
      }).catch(() => {
        this.router.navigate(['/']);
      });;
      this.item.setValue("");
      this.item.markAsUntouched();
      this.item.markAsPristine();
    }
  }


  done(index) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    fetch(baseUrl.baseURL+"/api/item/"+index, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":token
      }
      
    }).then(res => {
      if(!res.ok) throw new Error("cannot edit finish");
      
      return res.json()
    }).then((res) => {
      this.list = res;
    }).catch(() => {
      this.router.navigate(['/']);
    });
  }


  deleteItem($event,index) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    fetch(baseUrl.baseURL+"/api/item/"+index, {
      method: 'Delete',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":token
      }
      
    }).then(res => {
      if(!res.ok) throw new Error("cannot edit finish");
      
      return res.json()
    }).then((res) => {
      this.list = res;
    }).catch(() => {
      this.router.navigate(['/']);
    });;
  }
}
