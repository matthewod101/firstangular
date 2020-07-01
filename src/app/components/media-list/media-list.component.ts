import { Component, OnInit, Input } from '@angular/core';
import { MediaListItem } from 'src/app/models';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/media.actions';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  @Input() list: MediaListItem[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  remove(item: MediaListItem): void {
    this.store.dispatch(actions.mediaRemoved({ payload: item }));
  }

  consume(item: MediaListItem): void {
    this.store.dispatch(actions.mediaConsumed({ media: item }));
  }

}
