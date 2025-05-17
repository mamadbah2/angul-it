import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import {CaptchaLevelComponent} from './captcha-level/captcha-level.component';
import {CaptchaComponent} from './captcha/captcha.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, CaptchaLevelComponent, CaptchaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angul-it';
}
