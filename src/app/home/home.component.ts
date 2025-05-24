import { Component } from '@angular/core';
import {CaptchaSolveComponent} from "../captcha-solve/captcha-solve.component";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CaptchaSolveComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
