import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero';
import { AsyncPipe } from '@angular/common';
import { ContentBlockComponent } from "../content-block/content-block.component";
import { ItemTabsComponent } from "../item-tabs/item-tabs.component";
import { ItemTabItemComponent } from "../item-tab-item/item-tab-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ContentBlockComponent, ItemTabsComponent, ItemTabItemComponent],
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
