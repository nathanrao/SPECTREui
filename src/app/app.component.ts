import { Component, OnInit } from '@angular/core';
import { ApiCallService} from './api-call.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hesburgh Library Room Occupancy';
  subtitle = 'SPECTRE CPEG Senior Design Fall 2018';
  numPeople = 0;

  constructor(private titleService: Title,  private service: ApiCallService) {}

  ngOnInit() {
    this.titleService.setTitle('Hesburgh Library Room Occupancy');
    this.service.get().subscribe(x => {
      this.numPeople = x['Items'][0]['numpeople']['N'];
      console.log(x);
    });
  }


}
