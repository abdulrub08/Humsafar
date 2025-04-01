import { Component } from '@angular/core';
import { CommonGenericModule } from '../../shared/common-generic/common-generic.module';

@Component({
  selector: 'app-chat-inbox-dialog',
  standalone: true,
  imports: [CommonGenericModule],
  templateUrl: './chat-inbox-dialog.component.html',
  styleUrl: './chat-inbox-dialog.component.css'
})
export class ChatInboxDialogComponent {
  inboxMsgs:any=[
    {
      "date": "2025-04-01",
      "id": 201,
      "msg": "Hello! I liked your profile. Let's connect.",
      "name": "Ayesha Khan",
      "profile_pic_url": "https://randomuser.me/api/portraits/women/1.jpg",
      "status":"bg-success"
    },
    {
      "date": "2025-04-01",
      "id": 202,
      "msg": "I found your profile interesting. Would love to know more.",
      "name": "Rahul Sharma",
      "profile_pic_url": "https://randomuser.me/api/portraits/men/2.jpg",
      "status":"offline"
    },
    {
      "date": "2025-04-01",
      "id": 203,
      "msg": "Hey! Are you open to a conversation?",
      "name": "Neha Patel",
      "profile_pic_url": "https://randomuser.me/api/portraits/women/3.jpg",
      "status":"away"
    },
    {
      "date": "2025-04-01",
      "id": 204,
      "msg": "Hi, your profile looks great. Let's chat!",
      "name": "Amit Verma",
      "profile_pic_url": "https://randomuser.me/api/portraits/men/4.jpg",
      "status":"offline"
    },
    {
      "date": "2025-04-01",
      "id": 205,
      "msg": "I'm interested in knowing more about you.",
      "name": "Sara Ali",
      "profile_pic_url": "https://randomuser.me/api/portraits/women/5.jpg",
      "status":"busy"
    },
    {
      "date": "2025-04-01",
      "id": 206,
      "msg": "Looking forward to a meaningful conversation.",
      "name": "Vikram Singh",
      "profile_pic_url": "https://randomuser.me/api/portraits/men/6.jpg",
      "status":"offline"
    },
    {
      "date": "2025-04-01",
      "id": 207,
      "msg": "Hi there! Your profile caught my attention.",
      "name": "Priya Das",
      "profile_pic_url": "https://randomuser.me/api/portraits/women/7.jpg",
      "status":"bg-success"
    },
    {
      "date": "2025-04-01",
      "id": 208,
      "msg": "Would love to connect and know more.",
      "name": "Rohan Mehta",
      "profile_pic_url": "https://randomuser.me/api/portraits/men/8.jpg",
      "status":"away"
    },
    {
      "date": "2025-04-01",
      "id": 209,
      "msg": "Hi! Are you available for a quick chat?",
      "name": "Anjali Kapoor",
      "profile_pic_url": "https://randomuser.me/api/portraits/women/9.jpg",
      "status":"away"
    },
    {
      "date": "2025-04-01",
      "id": 210,
      "msg": "I believe we might be a good match. Let's talk!",
      "name": "Arjun Rao",
      "profile_pic_url": "https://randomuser.me/api/portraits/men/10.jpg",
      "status":"bg-success"
    }
  ];
  showAllMessages = false;
  toggleMessages() {
    this.showAllMessages = !this.showAllMessages;
  }
}
