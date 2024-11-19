import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/service/faculty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty-events',
  templateUrl: './faculty-events.component.html',
  styleUrls: ['./faculty-events.component.css']
})
export class FacultyEventsComponent implements OnInit {
  faculty_id
  events_arr
  event_obj = {
    START_DATE : '',
    TITLE : '',
    FACULTY_NAME : '',
    IMG_PATH : ""
  }
  faculty_name = ''
  constructor(private rest : FacultyService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.faculty_id = this.route.snapshot.paramMap.get('id')
    this.getdata()
    window.scroll(0,0)
    setTimeout(() => {
      this.navBar()
      
    }, 1000);
  }

  getdata(){
    this.rest.facultyEvents(this.faculty_id).subscribe((res:any) => {
      console.log(res)
      if(res.LatestEvents.length != 0){
        this.event_obj = res.LatestEvents[0]
      }

     
      this.events_arr = res.LatestEvents
      this.faculty_name = res.faculty_name
    })
  }

  navBar(){
    var scrollpos = window.scrollY;
    var nav = document.getElementsByClassName("faculty-nav")[0];
    function add_class_on_scroll() {
      nav.classList.add("top-0");
    }
    function remove_class_on_scroll() {
      nav.classList.remove("top-0");
    }
    window.addEventListener('scroll', function () {
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        add_class_on_scroll();
      }
      else {
        remove_class_on_scroll();
      }
    });
  }
  go_to_event(item){
    this.router.navigate(['/event_Details',item.ID])
  }

}
