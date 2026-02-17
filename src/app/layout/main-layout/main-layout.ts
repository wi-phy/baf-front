import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-full items-center',
  },
})
export class MainLayout {}
