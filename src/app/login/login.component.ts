import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import baseUrl from '../api.baseurl';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  constructor(private router: Router) { 
    if (localStorage.getItem('token')) this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }
  login() {
    
    let data = {
      "email": this.email.value.trim(),
      "password":this.password.value.trim()
    }
    fetch(baseUrl.baseURL+"/api/login", {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      
    }).then(res => {
      if(!res.ok) throw new Error("cannot login");
      
      return res.text();
    }).then((res) => {
      localStorage.setItem('token', res);
      this.router.navigate(['/'])
    }).catch((err) => {
      this.router.navigate(['/login'])
    });
  }
}
