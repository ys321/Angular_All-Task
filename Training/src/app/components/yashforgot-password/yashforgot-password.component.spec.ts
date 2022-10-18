import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashforgotPasswordComponent } from './yashforgot-password.component';

describe('YashforgotPasswordComponent', () => {
  let component: YashforgotPasswordComponent;
  let fixture: ComponentFixture<YashforgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YashforgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YashforgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
