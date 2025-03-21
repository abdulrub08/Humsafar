import { Component } from '@angular/core';
import { Profile, SuccessStories } from '../../../model/Profile';
import { GeneralRoutingModule } from '../../general-routing.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [GeneralRoutingModule,NgFor],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
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
