import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FacultyService } from 'src/app/service/faculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyId: any
  aboutFaculty;
  events;
  news;
  departments = [];
  Researches;
  DATE_ESTABLISH;
  FACULTY_NAME;
  faculty_image
  has_credit = false
  gallery
  galley_Config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  facultyObj:any
  constructor(private rest: FacultyService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.navBar()
    }, 1000);
    window.scrollTo(0, 0)
    //  this.DATE_ESTABLISH = localStorage.getItem('DATE_ESTABLISH')
    //  this.FACULTY_NAME =  localStorage.getItem('FACULTY_NAME')
    this.facultyId = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData() {
    let branch_id = localStorage.getItem('branch_id')
    if (branch_id) {

    } else {
      branch_id = '5'
    }
    this.rest.facultyHome(this.facultyId, branch_id).subscribe((res: any) => {
      console.log("res", res)
      this.aboutFaculty = res.ABOUT_FACULTY
      this.events = res.Events
      this.news = res.News
      this.Researches = res.Researches
      this.departments = res.departments
      this.faculty_image = res.SLIDER_IMAGE
      this.FACULTY_NAME = res.FACULTY_NAME
      this.DATE_ESTABLISH = res.DATE_ESTABLISH
      this.has_credit = res.HAS_CREDIT
      this.gallery = res.gallery
      localStorage.setItem("faculty_image", res.SLIDER_IMAGE)

    })
  }

  goto_depart(item) {
    this.router.navigate(['/department', item.ID])
  }


  navBar() {
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

  faculty_fees(elemnt) {
    this.router.navigate(['/Education_system', this.facultyId])
    localStorage.setItem("elemnt", elemnt)
  }

  go_to_event(item) {
    this.router.navigate(['/event_Details', item.ID])
  }

}
