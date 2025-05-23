import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {flatMap} from 'rxjs';

@Component({
  selector: 'app-captcha-level',
  imports: [
    NgForOf,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './captcha-level.component.html',
  styleUrl: './captcha-level.component.css'
})
export class CaptchaLevelComponent {

  image = Array.from({length: 16}, (_, i) => ({
    numero : i+1,
    isSelected: false
  }));

  @Input()
  level = 0

  @Input()
  titre = ""

  @Input()
  correctResponses:number[] = [];

  @Output()
  isSuccess = new EventEmitter<boolean>();

  @Output()
  isBack = new EventEmitter<boolean>();

  toggleSelection(id:number) {
    let i = this.image.find(i => i.numero == id);
    if (i) i.isSelected = !i.isSelected;
    if (this.checkCorrectResponses()) {
      this.image.map(i => i.isSelected = false);
      this.isSuccess.emit(true);
    }
  }

  checkCorrectResponses():boolean {
    let choiceSort = this.image
      .filter(i => i.isSelected)
      .map(i=> i.numero)
      .sort((a, b)=> a-b)
      .join(",");

    let correctChoice = this.correctResponses
      .sort((a, b)=> a-b)
      .join(",")

    return choiceSort == correctChoice
  }

  skip() {
    alert("Sorry, the project says 'Ensure that users " +
      "cannot transition to subsequent challenges without " +
      "adequately completing the present one.' ");
  }

  goBack() {
    this.image.map(i => i.isSelected = false);
    this.isBack.emit(true)
  }

}
