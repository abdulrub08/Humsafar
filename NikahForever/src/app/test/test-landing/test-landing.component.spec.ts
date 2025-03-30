import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLandingComponent } from './test-landing.component';

describe('TestLandingComponent', () => {
  let component: TestLandingComponent;
  let fixture: ComponentFixture<TestLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
