import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaEntryComponent } from './media-entry.component';

describe('MediaEntryComponent', () => {
  let component: MediaEntryComponent;
  let fixture: ComponentFixture<MediaEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
