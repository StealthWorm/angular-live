import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  // productsList = [{ name: 'camiseta' }, { name: 'tenis' }]

  // padrao de projeto que atualiza componentes que dependem dos valores, de modo que não precise ser revalidado,
  // pois ele notificara os observadores que o valor mudou
  // é uma classe que fornece mecanismos para lidar com streams de dados assincronos
  // é uma parte essecnail do RxJS (Reactive Extensions for Javascript)
  // o "$" na variavel indica que ele é assincrono e é um Observable, não é obrigatório ,mas usamos por padrão
  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getData("").pipe(
      map(response => {
        console.log(response)
        return response; //.body.list;
      })
    )
  }

  onClick() {
    this.products$ = this.productsService.getDataFiltered("filtro").pipe(
      map(response => {
        return response.data.body.list;
      })
    )
  }
}
