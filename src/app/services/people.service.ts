import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //访问API一般都放在service服务里
import { Observable, of } from 'rxjs'; //异步接收API内容
import { IPeople } from 'src/app/model/people.model';
import { catchError, map, tap } from 'rxjs/operators';//Error handling出错观察

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  private baseURL = 'http://localhost:3000/people';  // URL to api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getPeopleAll(): Observable<IPeople[]> {
    return this.httpClient.get<IPeople[]>(this.baseURL)
      .pipe(
        catchError(this.handleError<IPeople[]>('getPeopleAll', ))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getPeopleNo404<Data>(id: number): Observable<IPeople> {
    const url = `${this.baseURL}/?id=${id}`;
    return this.httpClient.get<IPeople[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array,
        catchError(this.handleError<IPeople>(`getHero id=${id}`))
      );
  }

  getPeople(id: number): Observable<IPeople> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.get<IPeople>(url).pipe(
      catchError(this.handleError<IPeople>(`getPeople id=${id}`))
    );
  }

  
  // read(id: number): Observable<any> {
  //   return this.httpClient.get(`${this.baseURL}/${id}`);
  // }

  // create(data): Observable<any> {
  //   return this.httpClient.post(this.baseURL, data);
  // }

  // update(id, data): Observable<any> {
  //   return this.httpClient.put(`${this.baseURL}/${id}`, data);
  // }

  // delete(id: number): Observable<any> {
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.httpClient.delete(this.baseURL);
  // }

  // searchByName(name: string): Observable<any> {
  //   return this.httpClient.get(`${this.baseURL}?name=${name}`);
  // }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }    
  
}
