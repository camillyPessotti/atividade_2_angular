import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaUsers = [
    { user: 'Camilly', password: 'camilly' },
    { user: 'Bruna', password: 'bruna' },
    { user: 'João', password: 'joao' },
    { user: 'Leonardo', password: 'leonardo' },
    { user: 'Diego', password: 'diego' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logon() {
    this.router.navigate(['/pagina-principal']);
  }

}
