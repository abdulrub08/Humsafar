import { Component, Input } from '@angular/core';
import { ProfileListService } from '../../services/profile-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake',
  standalone: true,
  imports:  [CommonModule],
  templateUrl: './fake.component.html',
  styleUrl: './fake.component.css'
})
export class FakeComponent {
  @Input() profiles: any[] = [];
  startIndex = 0;
  hoverProfile: number | null = null;
  visibleProfiles: any[] = [];
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
      this.visibleProfiles = this.profiles.slice(start, end);
    }

  next() { if (this.startIndex + 5 < this.profiles.length) this.startIndex += 5; }
  prev() { if (this.startIndex > 0) this.startIndex -= 5; }
  truncate(text: string, length: number) { return text.length > length ? text.substring(0, length) + '...' : text; }
}
