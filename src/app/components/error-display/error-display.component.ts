import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectHasErrors, AppState, selectErrorMessage } from 'src/app/reducers';
import { clearError } from 'src/app/actions/app.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.pipe(
      select(selectHasErrors)
    );
    this.errorMessage$ = this.store.pipe(
      select(selectErrorMessage)
    );
  }

  clearError(): void {
    this.store.dispatch(clearError());
  }
}
