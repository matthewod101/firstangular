import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import * as actions from '../../actions/media.actions';

@Component({
  selector: 'app-media-entry',
  templateUrl: './media-entry.component.html',
  styleUrls: ['./media-entry.component.css']
})
export class MediaEntryComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      recommendedBy: ['', [Validators.required]],
      kind: ['', [Validators.required]]
    });
  }

  get title(): AbstractControl { return this.form.get('title'); }
  get recommendedBy(): AbstractControl { return this.form.get('recommendedBy'); }
  get kind(): AbstractControl { return this.form.get('kind'); }

  submit(focusMe: HTMLInputElement): void {
    this.store.dispatch(actions.mediaAdded(this.form.value));
    this.form.reset();
    focusMe.focus();
  }

}
