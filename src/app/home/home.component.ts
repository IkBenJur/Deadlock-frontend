import { Component, inject } from '@angular/core';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  heroService = inject(HeroService);
  heroes: any[] = [];

  constructor(heroService: HeroService){
    this.heroes = heroService.getHeroes();
  }
}
