import { Component } from '@angular/core';
import { Profile, SuccessStories } from '../../model/Profile';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-card-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile-card-section.component.html',
  styleUrl: './profile-card-section.component.css'
})
export class ProfileCardSectionComponent {
  profiles: Profile[] = [
    {
      image: 'assets/profiles/profile2.jpg',
      alt:'Profile 1',
      age:24,
      location:'New York',
      name:'John Doe'
    },
    {
      image: 'assets/profiles/profile3.jpg',
      alt:'Profile 2',
      age:26,
      location:'San Francisco',
      name:'Jane Smith'
    },
    {
      image: 'assets/profiles/profile2.png',
      alt:'Profile 3',
      age:30,
      location:'Chicago',
      name:'Raj Patel'
    },
    {
      image: 'assets/profiles/profile10.jpg',
      alt:'Profile 2',
      age:26,
      location:'San Francisco',
      name:'Ayush Smith'
    },
    {
      image: 'assets/profiles/profile11.jpg',
      alt:'Profile 3',
      age:30,
      location:'Chicago',
      name:'Raja Khan'
    }
  ];
  stories: SuccessStories[] = [
    {
      desc:'"We found each other on Matrimonial Connect and it was love at first sight!" - Sarah & John'
    },
    {
      desc:'"Thanks to this platform, we are happily married for two years now!" - Priya & Rakesh'
    },
    {
      desc:'"A wonderful experience with a happy ending. Thank you!" - Emily & Ryan'
    }
  ]
}
