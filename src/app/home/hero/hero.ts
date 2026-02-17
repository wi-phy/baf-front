import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GradientTextDirective } from '../../shared/directives/gradient-text.directive';

@Component({
  selector: 'app-hero',
  imports: [GradientTextDirective],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
