import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import {CaptchaLevelComponent} from './captcha-level/captcha-level.component';
import {CaptchaComponent} from './captcha/captcha.component';
import {CaptchaSolveComponent} from './captcha-solve/captcha-solve.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angul-it';
}
