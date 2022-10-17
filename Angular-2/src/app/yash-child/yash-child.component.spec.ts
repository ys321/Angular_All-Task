import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashChildComponent } from './yash-child.component';

describe('YashChildComponent', () => {
  let component: YashChildComponent;
  let fixture: ComponentFixture<YashChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YashChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YashChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
