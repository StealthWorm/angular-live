import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponentComponent
  },
  // {
  //   path: 'second',
  //   component: SecondComponentComponent
  // },
  // {
  //   path: '/not-found',
  //   component: Notfound
  // },
  {
    // rota para redirecionar para home caso nao encontre a rota, podemos redirecionar para um Not Found
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
