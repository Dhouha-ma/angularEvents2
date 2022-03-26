import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() eventThumbnail: any;

  constructor() {}

  ngOnInit(): void {}

  getStartTimeClass() {
    if (this.eventThumbnail && this.eventThumbnail.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}
