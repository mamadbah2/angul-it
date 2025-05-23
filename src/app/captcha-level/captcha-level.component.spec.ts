import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaLevelComponent } from './captcha-level.component';

describe('CaptchaLevelComponent', () => {
  let component: CaptchaLevelComponent;
  let fixture: ComponentFixture<CaptchaLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
