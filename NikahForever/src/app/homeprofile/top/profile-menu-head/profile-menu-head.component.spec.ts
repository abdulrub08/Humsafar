import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuHeadComponent } from './profile-menu-head.component';

describe('ProfileMenuHeadComponent', () => {
  let component: ProfileMenuHeadComponent;
  let fixture: ComponentFixture<ProfileMenuHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMenuHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMenuHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
