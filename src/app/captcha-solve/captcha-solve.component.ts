import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-captcha-solve',
  imports: [
    FormsModule,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './captcha-solve.component.html',
  styleUrl: './captcha-solve.component.css'
})
export class CaptchaSolveComponent {
  @Input()
  level:number = 0;

  @Input()
  sublevel=0;

  @Input()
  correctResponse:any[] = [];

  response:string = "";
  isResponseFailed = false;

  @Input()
  titre:string = "";

  @Output()
  isBack = new EventEmitter<boolean>()

  @Output()
  isNext = new EventEmitter<boolean>()

  goBack() {
    this.isBack.emit(true)
  }

  checkCorrectResponse() {
    this.playSoundButton()
    // let value = parseInt(this.response, 10)
    if (this.response == this.correctResponse[0]) this.isNext.emit(true)
    else {
      this.isResponseFailed = true;
      setTimeout(()=> this.isResponseFailed = false, 2000);
    }
    this.response = ""
  }

  playSoundButton() {
    const audio = new Audio();
    audio.src="./sound/choice.mp3";
    audio.load();
    audio.play();
  }
}
