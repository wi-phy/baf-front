import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Navbar } from "../layout/navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [Hero, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
