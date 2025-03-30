import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRowFirstComponent } from './content-row-first.component';

describe('ContentRowFirstComponent', () => {
  let component: ContentRowFirstComponent;
  let fixture: ComponentFixture<ContentRowFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRowFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentRowFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
