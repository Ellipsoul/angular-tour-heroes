import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


// All components are annotated with the @Component decorator
@Component({
  // These are always scoped to the specific component
  selector: 'app-heroes',  // Component's CSS element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {  // Export component so it can be imported elsewhere

  selectedHero?: Hero;     // Tracks state of the selected hero
  heroes:Hero[] = [];      // Mocked heroes

  // Declaring heroService here makes it available in the class
  constructor(private heroService:HeroService, private messageService:MessageService) {  }

  // This synchornous implementation no longer works. See below
  // getHeroes():void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // This is a lifecycle hook called just after creating a component
  ngOnInit(): void {
    // Call here rather than in the constructor since the constructor should be kept as simple as possible
    this.getHeroes();
  }

  // Subscribe to the getHeroes function in the service and use the return value to set the heroes
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // Add a new hero
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Remove a hero
  delete(hero:Hero):void {
    // Delegate deleting heroes to the service, but also handle the hero list state here
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // Handles state of selected hero (no longer used)
  // onSelect(hero: Hero):void {
  //   this.selectedHero = hero;
  //   // Send a message whenever a new hero is selected
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

}
