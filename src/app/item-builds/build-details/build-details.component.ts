import { Component } from '@angular/core';
import { ContentBlockComponent } from '../../content-block/content-block.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Build } from '../../../types/build';
import { BuildService } from '../../../services/build.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemSetDisplayComponent } from "../item-set-display/item-set-display.component";

@Component({
  selector: 'app-build-details',
  standalone: true,
  imports: [ContentBlockComponent, AsyncPipe, ItemSetDisplayComponent],
  templateUrl: './build-details.component.html',
})
export class BuildDetailsComponent {
  build$!: Observable<Build>;

  constructor(
    private buildService: BuildService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.build$ = this.buildService.getById(id);
    }
  }
}
