import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list = [
    {user: 'Camilly', password: 123},
    {user: 'Diego', password: 123},
    {user: 'Bruna', password: 123}
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
