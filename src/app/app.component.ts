import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['autorennen.jpg', 'treff.jpg', 'mottorad1.jpg'];
  headlines = ['This is My First Angular Project',
  'This is My First Angular Project2',
  'This is My First Angular Project3'];
  currentImg = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImg++;
      this.currentImg = this.currentImg % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
