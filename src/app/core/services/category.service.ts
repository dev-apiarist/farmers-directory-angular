import { categories } from './../../shared/models/categories';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private REST_API_URL =
    'https://farmers-directory.vercel.app/api/v1/categories';

  private HTTP_HEADER = new HttpHeaders({
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmE2NDE3MTA1MTFhZGE4ZGY1MjEwYSIsImVtYWlsIjoibmlvbG9zMjExM0BnbWFpbC5jb20iLCJpc1N1cGVyQWRtaW4iOnRydWUsImlhdCI6MTY2ODA5NDE4NSwiZXhwIjoxNjY4MDk3Nzg1fQ.2EAL8d5tA1VFXVSga9Kzw8Z-DZaD5y4eDgqhh_-XK8Y',
  });

  constructor(private http: HttpClient) {}

  getCategoryById(id: string): Observable<categories | any> {
    const thisUrl = `${this.REST_API_URL}/${id}`;
    return this.http
      .get<categories>(thisUrl, { headers: this.HTTP_HEADER })
      .pipe(
        tap((categories) => {
          console.log(`this Subscriber = ${JSON.stringify(categories)}`);
        }),
        catchError((error) => of(new categories()))
      );
  }

  getAllCategories() {
    const thisUrl = `${this.REST_API_URL}`;
    return this.http
      .get<categories[] | any>(thisUrl, { headers: this.HTTP_HEADER })
      .pipe(
        tap((categories) => {
          console.log(`recieved events = ${categories}`);
        }),
        catchError((error) => of([]))
      );
  }
}
