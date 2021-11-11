import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// All components are annotated with the @Component decorator
@Component({
  selector: 'app-heroes',  // Component's CSS element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {  // Export component so it can be imported elsewhere
  // Since this is a property of the class we don't need to initialise it
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // Mocked heroes
  heroes:Hero[] = HEROES;

  constructor() {
  }

  // This is a lifecycle hook called just after creating a component
  ngOnInit(): void {

  }

}
