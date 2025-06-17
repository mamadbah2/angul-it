import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CaptchaStateService} from '../captcha-state.service';

@Component({
  selector: 'app-result',
  imports: [
    RouterLink
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  score : number = 0

  constructor(private captchaStateService: CaptchaStateService) {
  }

  ngOnInit():void {
    this.score = this.captchaStateService.getTimeSource().getValue()

  }
}
