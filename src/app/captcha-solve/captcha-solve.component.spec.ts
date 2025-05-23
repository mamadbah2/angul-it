import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaSolveComponent } from './captcha-solve.component';

describe('CaptchaSolveComponent', () => {
  let component: CaptchaSolveComponent;
  let fixture: ComponentFixture<CaptchaSolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaSolveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaSolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
