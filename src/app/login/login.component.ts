import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { timeStamp } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list = [
    {user: 'camilly', password: 123},
    {user: 'Diego', password: 321},
    {user: 'Bruna', password: 12345}
  ]

  user = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logon() {
    localStorage.setItem('USER', this.user);
    localStorage.setItem('PASSWORD', this.password)
    this.router.navigate(['/pagina-principal']);
  }

}
