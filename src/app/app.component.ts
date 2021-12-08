import { Component } from '@angular/core';

import SwiperCore, {Swiper, Mousewheel, Pagination, SwiperOptions} from 'swiper';
SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testOption: SwiperOptions = {
    direction: 'vertical',
    speed: 1000,
    touchReleaseOnEdges: true,
    mousewheel: {
      thresholdTime: 1000,
      releaseOnEdges: true
    }
  }
  constructor() {
  }

}
