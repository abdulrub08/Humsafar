import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginPicComponent } from './user-login-pic.component';

describe('UserLoginPicComponent', () => {
  let component: UserLoginPicComponent;
  let fixture: ComponentFixture<UserLoginPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoginPicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
