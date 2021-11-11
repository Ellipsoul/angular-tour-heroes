import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// This is an Angular service which can inject data into other components
// A provider needs to be registered in order for the service to work
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private messageService:MessageService,
    private http:HttpClient) { }

  // This is a synchronous call to retrieve heroes, which isn't going to work in practice
  // Return the mocked list of heroes
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  private heroesUrl = 'api/heroes';  // URL to web api

  // GET heroes from the server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        // Tap into the observable values, then pass them along
        tap(_ => this.log('fetched heroes')),
        // Handle error by piping the HTTP request to this catchError function
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  // Angular calls using HttpClient.get() will return an Observable, which is asyncrhonous
  // Removing this mock way to get heroes
  // getHeroes():Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add("HeroService: fetched heroes");
  //   return heroes;
  // }

  // Retrieve a hero from the HEROES list by id
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
