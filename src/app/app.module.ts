import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent // declara os componentes do modulo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //precisa ser chamado para que o http funcione no service, pode ser aqui ou no module especifico do componente
    CommonModule // pipe para asyncronos
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
