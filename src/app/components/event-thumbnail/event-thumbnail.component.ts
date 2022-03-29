import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/types/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() eventThumbnail: IEvent;

  constructor() {}

  ngOnInit(): void {}

  getStartTimeClass() {
    if (this.eventThumbnail && this.eventThumbnail.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}
