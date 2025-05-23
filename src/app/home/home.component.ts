import { Component } from '@angular/core';
import {CaptchaSolveComponent} from "../captcha-solve/captcha-solve.component";

@Component({
  selector: 'app-home',
    imports: [
        CaptchaSolveComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
