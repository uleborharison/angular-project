import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit, OnChanges {
  rating: number = 4;
  cropWidth: number = 75;

  constructor() {}
  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  ngOnInit(): void {}
}
