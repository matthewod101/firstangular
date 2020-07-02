import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MediaEntity } from 'src/app/reducers/media.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data$: Observable<MediaEntity[]>;
  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.data$ = this.client.get<{ data: MediaEntity[] }>('http://localhost:1337/media').pipe(
      map(r => r.data)
    );
  }

}
