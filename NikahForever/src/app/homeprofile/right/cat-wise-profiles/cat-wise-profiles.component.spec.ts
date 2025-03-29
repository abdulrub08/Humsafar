import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatWiseProfilesComponent } from './cat-wise-profiles.component';

describe('CatWiseProfilesComponent', () => {
  let component: CatWiseProfilesComponent;
  let fixture: ComponentFixture<CatWiseProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatWiseProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatWiseProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
