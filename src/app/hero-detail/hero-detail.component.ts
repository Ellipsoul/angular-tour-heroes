import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {

  // Decorate inputs with this @Input
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
