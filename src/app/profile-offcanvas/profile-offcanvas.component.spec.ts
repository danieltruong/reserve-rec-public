import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOffcanvasComponent } from './profile-offcanvas.component';
import { ActivatedRoute } from '@angular/router';

describe('ProfileOffcanvasComponent', () => {
  let component: ProfileOffcanvasComponent;
  let fixture: ComponentFixture<ProfileOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOffcanvasComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
