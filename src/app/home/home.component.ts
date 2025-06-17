import { Component } from '@angular/core';
import {CaptchaSolveComponent} from "../captcha-solve/captcha-solve.component";
import {RouterLink} from '@angular/router';
import {CaptchaStateService} from '../captcha-state.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private captchaStateService : CaptchaStateService) {
  }

  ngOnInit() {
    this.captchaStateService.resetTimer() // On reset le timer apres le resultat
    this.playSound();
  }

  playSound() {
    const audio = new Audio();
    audio.src="./sound/gamesound.mp3";
    audio.load();
    audio.loop = true;
    audio.play();
  }

  playSoundButton() {
    const audio = new Audio();
    audio.src="./sound/clic.mp3";
    audio.load();
    audio.play();
  }
}
