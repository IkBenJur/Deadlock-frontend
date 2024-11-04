import { Component, inject } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [],
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent {
  heroService = inject(HeroService);
  hero;

  constructor(heroService: HeroService){
    this.hero = heroService.getHero(0);
  }

}
