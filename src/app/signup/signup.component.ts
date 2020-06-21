import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import baseUrl from '../api.baseurl';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  name = new FormControl('', [
    Validators.required
  ]);
  constructor(private router: Router) { 
    if (localStorage.getItem('token')) this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }
  signup() {
    let data = {
      "email": this.email.value.trim(),
      "password": this.password.value.trim(),
      "userName":this.name.value.trim()
    }
    fetch(baseUrl.baseURL+"/api/signup", {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      
    }).then(res => {
      if(!res.ok) throw new Error("cannot signup");
      return res.text();
    }).then((res) => {
      localStorage.setItem('token', res);
      this.router.navigate(['/']);
    }).catch(()=>this.router.navigate(['/signup']));
  }
}
