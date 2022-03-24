import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCreationCenterComponent } from './artist-creation-center.component';

describe('ArtistCreationCenterComponent', () => {
  let component: ArtistCreationCenterComponent;
  let fixture: ComponentFixture<ArtistCreationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistCreationCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCreationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
