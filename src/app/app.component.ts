import { Component } from '@angular/core';

import { image1, image2, image3, image4 } from '../assets/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Catalog Viewer';

  catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  activeIndex: number = 0;
  slideDuration = 3000;
  sliderTimeout: any;
  selectedCatalog(index: number) {
    console.log("SELECTED IMAGE");
    this.activeIndex = index;
  }
  nextImage() {
    console.log("NEXT IMAGE");
    if (this.catalogsList.length > this.activeIndex + 1) {
      this.activeIndex = this.activeIndex + 1;
    } else {
      this.activeIndex = 0;
    }
  }
  previousImage() {
    console.log("PREVIOUS IMAGE");
    if (this.activeIndex == 0) {
      this.activeIndex = this.catalogsList.length - 1;
    } else {
      this.activeIndex = this.activeIndex - 1;
    }
  }
  onStartSlideShowChange(value) {
    console.log("SLIDE SHOW, ", value.target.checked);
    var currentWindow = this;
    if (value.target.checked) {
      this.sliderTimeout = setInterval(function(currentWindow){ currentWindow.nextImage() }, currentWindow.slideDuration, this);
    } else {
      clearInterval(this.sliderTimeout);
    }
  }
}
