import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError,map,tap } from 'rxjs';
import { products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REST_API_URL = "https://farmers-directory.vercel.app/api/v1/products"

  private HTTP_HEADER = new HttpHeaders({'content-type': 'application/json', "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmE2NDE3MTA1MTFhZGE4ZGY1MjEwYSIsImVtYWlsIjoibmlvbG9zMjExM0BnbWFpbC5jb20iLCJpc1N1cGVyQWRtaW4iOnRydWUsImlhdCI6MTY2ODA5NDE4NSwiZXhwIjoxNjY4MDk3Nzg1fQ.2EAL8d5tA1VFXVSga9Kzw8Z-DZaD5y4eDgqhh_-XK8Y"})


  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<products[]|any>{
    const thisUrl = `${this.REST_API_URL}`;
    return this.http.get<products[]|any>(thisUrl,{headers:this.HTTP_HEADER}).pipe(
      tap(products =>{
        console.log(`recieved events = ${products}`);
       }),
       catchError(error => of([]))
    )
  }
}
