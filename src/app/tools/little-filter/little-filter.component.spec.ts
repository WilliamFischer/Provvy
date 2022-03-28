import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleFilterComponent } from './little-filter.component';

describe('LittleFilterComponent', () => {
  let component: LittleFilterComponent;
  let fixture: ComponentFixture<LittleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
