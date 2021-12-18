import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import CheckLogged from './checkLogged.canActivate';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
