import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  allEvents;
  constructor(private rest : RestService , private route : Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.getData()
  }

  getData(){
    this.rest.getEvents().subscribe((res :any) => {
      console.log(res)
      this.allEvents = res.LatestEvents
    })
  }

  eventDetails(id){
    this.route.navigate(['/event_Details',id])
  }

}
