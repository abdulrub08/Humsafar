import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTestComponent } from './content-test.component';

describe('ContentTestComponent', () => {
  let component: ContentTestComponent;
  let fixture: ComponentFixture<ContentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
