import { Component, OnInit, Input } from '@angular/core';
import { MediaListItem } from 'src/app/models';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  @Input() list: MediaListItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
