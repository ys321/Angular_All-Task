import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashnotFoundComponent } from './yashnot-found.component';

describe('YashnotFoundComponent', () => {
  let component: YashnotFoundComponent;
  let fixture: ComponentFixture<YashnotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YashnotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YashnotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
