import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRowThirdComponent } from './content-row-third.component';

describe('ContentRowThirdComponent', () => {
  let component: ContentRowThirdComponent;
  let fixture: ComponentFixture<ContentRowThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRowThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentRowThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
