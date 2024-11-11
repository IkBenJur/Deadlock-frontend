import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentBlockComponent } from "../content-block/content-block.component";
import { Ability } from '../../types/ability';
import { BuildNameDescriptionDTO } from '../../types/BuildNameDescriptionDTO';
import { BuildService } from '../../services/build.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [AsyncPipe, ContentBlockComponent, RouterLink],
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent {
  hero$!: Observable<Hero>;
  abilities!: Ability[];
  builds$!: Observable<BuildNameDescriptionDTO[]>

  constructor(
    private heroService: HeroService,
    private buildService: BuildService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.hero$ = this.heroService.getHero(id);
      this.builds$ = this.buildService.getNamesAndDescriptionByHeroId(id);

      this.hero$.subscribe(res => {
        this.abilities = res.abilities.sort((a, b) => { return a.abilityNumber - b.abilityNumber });

        console.log(this.abilities);
      });
    }
  }
}
