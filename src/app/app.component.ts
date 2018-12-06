import { Component, OnInit } from '@angular/core';
import { ApiCallService} from './api-call.service';
import { Title } from '@angular/platform-browser';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hesburgh Library Room Occupancy';
  subtitle = 'SPECTRE CPEG Senior Design Fall 2018';
  count = 0;
  numPeople = 0;
  capacity = 48;
  capacityPercentage = 0;
  timestamp = 0;
  date = 0;
  realDate;
  dateData: Date[];
  peopleData: number[];
  i = 0;
  options = {width: 'auto',
              labels: ['x', 'y'],
              xlabel: 'time',
              ylabel: 'numPeople',
              animatedZooms: true,
              pointSize: 4};

  constructor(private titleService: Title,  private service: ApiCallService) {}

  ngOnInit() {

    this.service.get().subscribe(x => {
      this.count = x['Count'];
    });

    this.service.get().subscribe(x => {
      this.numPeople = x['Items'][0]['numpeople']['N'];
      this.capacityPercentage = this.numPeople * 100 / this.capacity;
    });
    console.log(this.numPeople);

    for (this.i; this.i < this.count; this.i + 1) {
      this.service.get().subscribe(x => {
        this.numPeople = x['Items'][this.i]['numpeople']['N'];
        this.peopleData[this.i] = this.numPeople;
      });
      this.service.get().subscribe(y => {
        this.timestamp = y['Items'][this.i]['timestamp']['N'];
        this.date = this.timestamp - 18000;
        this.realDate = new Date(this.date).toLocaleTimeString('en-US');
        this.dateData[this.i] = this.realDate;
      });
    }
    console.log(this.peopleData);
    console.log(this.dateData);
  }
}
