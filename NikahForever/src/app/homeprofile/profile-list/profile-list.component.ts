import { Component, OnInit } from '@angular/core';
import { ProfileListService } from '../../services/profile-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css'
})
export class ProfileListComponent implements OnInit {
  profiles: any[] = [];
  displayedProfiles: any[] = [];
  hoverProfile: number | null = null;
  pageIndex: number = 0;
  itemsPerPage: number = 5;
  isExpanded: { [key: number]: boolean } = {}; // Store expanded state for each profile

  constructor(private profileService: ProfileListService) {}

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
    this.updateDisplayedProfiles();
  }
  updateDisplayedProfiles() {
    const start = this.pageIndex * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedProfiles = this.profiles.slice(start, end);
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.itemsPerPage < this.profiles.length) {
      this.pageIndex++;
      this.updateDisplayedProfiles();
    }
  }

  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.updateDisplayedProfiles();
    }
  }
  
  // Function to truncate text
  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  // Toggle text expansion
  toggleExpand(profileId: number) {
    this.isExpanded[profileId] = !this.isExpanded[profileId];
  }
}