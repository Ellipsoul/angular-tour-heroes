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

  constructor(private messageService:MessageService) { }
}
