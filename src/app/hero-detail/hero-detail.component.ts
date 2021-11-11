import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {

  // Decorate inputs with this @Input
  @Input() hero?: Hero;

  constructor(
    // Holds information about the route to this instance of HeroDetailComponent
    private route: ActivatedRoute,
    // Retrieves information from a remote server to get the hero to display
    private heroService: HeroService,
    // Angular service for interacting with browser. Here use it to navigate back to the previous view
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is a static image of the route information just after the component was created
    // paramMap is a dictionary of the route parameter values extracted from the URL
    // By default these will return strings, so we need to convert it to a number to pass into getHero
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // Returns to the route previously routed from
  goBack(): void {
    this.location.back();
  }

  // Update a hero
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
