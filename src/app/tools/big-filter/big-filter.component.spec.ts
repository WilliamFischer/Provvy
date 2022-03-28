import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFilterComponent } from './big-filter.component';

describe('BigFilterComponent', () => {
  let component: BigFilterComponent;
  let fixture: ComponentFixture<BigFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
