import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { FacultyService } from 'src/app/service/faculty.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  facultyId
  faculty_about = {
    ABOUT_FACULTY: '',
    FACULTY_Name: '',
    DATE_ESTABLISH: '',
    FACULTY_RANK: '',
    FACULTY_VISION: '',
    WHY_THIS_FACULTY: '',
    YOUR_CAREER: '',
    FACULTIES_DEANS: [],
    graduates : [] ,
    WORD_ABOUT_FACULTY : ''
  }
  mangerConfig: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  }
  constructor(private route: ActivatedRoute, private rest: FacultyService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.navBar()
    }, 1000);
    window.scroll(0,0)
    this.facultyId = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData() {
    let branch_id = localStorage.getItem('branch_id')
    if(branch_id){

    }else {
      branch_id = '5'
    }
    this.rest.facultyAbout(this.facultyId,branch_id).subscribe((res: any) => {
      console.log(res)
      this.faculty_about = res
    })
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
}
