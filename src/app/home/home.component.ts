import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  heroes$!: Observable<Hero[]>;

  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
