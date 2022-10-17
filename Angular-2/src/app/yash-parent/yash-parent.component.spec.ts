import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashParentComponent } from './yash-parent.component';

describe('YashParentComponent', () => {
  let component: YashParentComponent;
  let fixture: ComponentFixture<YashParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YashParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YashParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
