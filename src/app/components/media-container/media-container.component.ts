import { Component, OnInit } from '@angular/core';
import { MediaListItem } from 'src/app/models';
import { Observable } from 'rxjs';
import { AppState, selectMediaListItemModel } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.css']
})
export class MediaContainerComponent implements OnInit {

  listModel$: Observable<MediaListItem[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.listModel$ = this.store.pipe(
      select(selectMediaListItemModel)
    );
  }

}
