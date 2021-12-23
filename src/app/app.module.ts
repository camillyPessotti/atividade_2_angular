import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import CheckLogged from './checkLogged.canActivate';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: LoginComponent, canActivate: []
      },
      {
        path: 'pagina-principal', component: PaginaPrincipalComponent, canActivate: []
      }
    ]),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
