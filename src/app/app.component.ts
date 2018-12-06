import { Component, OnInit } from '@angular/core';
import { ApiCall } from './api-call';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hesburgh Library Room Occupancy';
  subtitle = 'SPECTRE CPEG Senior Design Fall 2018';

  constructor(private titleService: Title,  ApiCall: service) {
    this.ApiCall = ApiCall;
  }

  ngOnInit() {
    this.titleService.setTitle('Hesburgh Library Room Occupancy');
    service.get();
  }


}
