import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInboxDialogComponent } from './chat-inbox-dialog.component';

describe('ChatInboxDialogComponent', () => {
  let component: ChatInboxDialogComponent;
  let fixture: ComponentFixture<ChatInboxDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatInboxDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInboxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
