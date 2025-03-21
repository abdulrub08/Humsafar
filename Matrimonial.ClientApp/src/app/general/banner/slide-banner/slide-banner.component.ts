import { Component } from '@angular/core';
import { Slide } from '../../../model/app.slide';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-slide-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slide-banner.component.html',
  styleUrl: './slide-banner.component.css'
})
export class SlideBannerComponent {
  slides: Slide[] = [
    {
      image: 'assets/profiles/banner1.jpg',
      title: 'Find Your Soulmate',
      description: 'Join millions of members on Matrimonial Connect and start your journey toward love and companionship.',
      alt: 'Happy Couple'
    },
    {
      image: 'assets/profiles/banner2.jpg',
      title: 'Your Love Story Starts Here',
      description: 'Discover profiles that match your personality and interests.',
      alt: 'Love Story'
    },
    {
      image: 'assets/profiles/banner3.jpg', title: 'Celebrate Love & Companionship',
      description: 'Take the first step towards a lifetime of happiness.',
      alt: 'Happy Wedding'
    }
  ];
  currentSlideIndex = 0;
  slideInterval: any; // Holds the interval ID  
  
  constructor() {}
  get slidePosition() {
    return -this.currentSlideIndex * 100;
  }
  ngOnInit() {
   
  }

  ngOnDestroy() {
   
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  afterNextRender(callback: () => void) {
    this.nextSlide();
    setInterval(this.nextSlide, 3000);
  }
}
