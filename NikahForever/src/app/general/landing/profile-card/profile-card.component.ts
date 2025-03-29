import { Component, OnInit } from '@angular/core';
import { Profile, SuccessStories } from '../../../model/Profile';
import { CommonGenericModule } from '../../../shared/common-generic/common-generic.module';
import { ProfileListService } from '../../../services/profile-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonGenericModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent implements OnInit {
  profiles: Profile[] = [];
  cat_rec:string| null = null;
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
  displayedProfiles: any[] = [];
  pageIndex: number = 0;
  itemsPerPage: number = 4;
  constructor(private profile_scv: ProfileListService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Capture the 'cat' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.cat_rec = params.get('cat');
    });
    this.profiles = this.profile_scv.getProfiles().slice();
    this.updateDisplayedProfiles();
  }
  updateDisplayedProfiles() {
    if(this.cat_rec == '' || this.cat_rec == null){
    const start = this.pageIndex * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedProfiles = this.profiles.slice(start, end);
    }else{
    //   const start = this.pageIndex * this.itemsPerPage;
    // const end = start + this.itemsPerPage;
    this.displayedProfiles = this.profiles.slice(1, this.profiles.length);
    }
  }
  ViewAll() {
    //profiles
    
  }
}
