import { NgFor, NgStyle } from '@angular/common';
import { Component ,OnInit, OnDestroy } from '@angular/core';
import { Slide } from '../../model/app.slide';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent implements OnInit, OnDestroy  {
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
