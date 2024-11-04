import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent {
  hero$!: Observable<Hero>;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.hero$ = this.heroService.getHero(id);
    }
  }
}
