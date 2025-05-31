import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  getProductsSmall(): Observable<Product[]> {
    return this.http
      .get<{ data: Product[] }>('assets/demo/data/products-small.json')
      .pipe(map((res) => res.data));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<{ data: Product[] }>('assets/demo/data/products.json')
      .pipe(map((res) => res.data));
  }

  getProductsMixed(): Observable<Product[]> {
    return this.http
      .get<{ data: Product[] }>('assets/demo/data/products-mixed.json')
      .pipe(map((res) => res.data));
  }

  getProductsWithOrdersSmall(): Observable<Product[]> {
    return this.http
      .get<{ data: Product[] }>('assets/demo/data/products-orders-small.json')
      .pipe(map((res) => res.data));
  }
}
