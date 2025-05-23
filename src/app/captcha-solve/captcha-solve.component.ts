import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-captcha-solve',
  imports: [
    NgForOf
  ],
  templateUrl: './captcha-solve.component.html',
  styleUrl: './captcha-solve.component.css'
})
export class CaptchaSolveComponent {
  @Input()
  currentLevel:number = 0;

  @Output()
  isBack = new EventEmitter<boolean>()

  goBack() {
    this.isBack.emit(true)
  }
}
