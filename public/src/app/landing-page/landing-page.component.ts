import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public imageSources: string[] = [
     'http://www.visiontimes.com/uploads/2016/06/6797591200_8da957f3e8_k-950x550.jpg',
 'http://balay.ph/wp-content/uploads/2016/11/418.jpg',
 'https://s-media-cache-ak0.pinimg.com/736x/f7/e5/12/f7e512fb1f402c8713c784212c76904c--no-never-never-again.jpg'
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
}
