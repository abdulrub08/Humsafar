import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRowSecondComponent } from './content-row-second.component';

describe('ContentRowSecondComponent', () => {
  let component: ContentRowSecondComponent;
  let fixture: ComponentFixture<ContentRowSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRowSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentRowSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
