import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent {
  hero$!: Observable<Hero>;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.hero$ = this.heroService.getHero(1);
  }
}
