import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashloginComponent } from './yashlogin.component';

describe('YashloginComponent', () => {
  let component: YashloginComponent;
  let fixture: ComponentFixture<YashloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YashloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YashloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
