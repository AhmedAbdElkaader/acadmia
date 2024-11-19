import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event_id
  event_data:any = {
    START_DATE : "",
    IMG_PATH : "",
    TITLE : "",
    Place : ""
  }
  constructor(private route: ActivatedRoute , private rest : RestService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0) 
    this.event_id = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.eventDetails(this.event_id).subscribe((res:any) => {
      console.log(res)
      this.event_data = res
    })
  }

}
