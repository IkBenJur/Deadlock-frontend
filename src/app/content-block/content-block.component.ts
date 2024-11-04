import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-block',
  standalone: true,
  imports: [],
  templateUrl: './content-block.component.html'
})
export class ContentBlockComponent {
  @Input({required: true}) blockTitle!: string;
}
