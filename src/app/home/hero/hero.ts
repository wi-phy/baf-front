import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GradientTextDirective } from '../../shared/directives/gradient-text.directive';

@Component({
  selector: 'app-hero',
  imports: [GradientTextDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {

}
