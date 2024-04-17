import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Product {
  id: string;
  thumb: string;
  name: string;
}

// torna a classe disponivel para injetar como dependencia
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(search: string): Observable<Product[]> {
    const options = {
      //   params: new HttpParams().set('s', search),
      //   headers: new HttpHeaders({
      //     'X-RapidAPI-Key': 'key',
      //     'X-RapidAPI-Host': 'host',
      //   })
    }
    return this.httpClient.get<Product[]>('', options).pipe(
      map((response: any[]) => {
        console.log(response)
        return response.map((item, index) => ({
          id: index.toString(),
          thumb: 'asasas',
          name: `Image ${index + 1}`,
        }));
      })
    )
  }

  getDataFiltered(filter: string): Observable<any> {
    return this.httpClient.get('url')
  }
}
