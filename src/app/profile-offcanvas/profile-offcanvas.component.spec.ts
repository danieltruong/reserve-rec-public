import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOffcanvasComponent } from './profile-offcanvas.component';

describe('ProfileOffcanvasComponent', () => {
  let component: ProfileOffcanvasComponent;
  let fixture: ComponentFixture<ProfileOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOffcanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
