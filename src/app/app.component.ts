import { Component } from '@angular/core';

@Component({
  //como eu instanciarei esse componente para fora da classe "<app-root>"
  selector: 'app-root',
  // html do componente
  // posso passar o html direto dentro  da tag "template:`<h2>teste</h2>` "
  templateUrl: './app.component.html',
  // estilos do componente
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-live';
}
