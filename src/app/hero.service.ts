import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// This is an Angular service which can inject data into other components
// A provider needs to be registered in order for the service to work
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // This is a synchronous call to retrieve heroes, which isn't going to work in practice
  // Return the mocked list of heroes
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Angular calls using HttpClient.get() will return an Observable, which is asyncrhonous
  getHeroes():Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  // Retrieve a hero from the HEROES list by id
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService:MessageService) { }
}
