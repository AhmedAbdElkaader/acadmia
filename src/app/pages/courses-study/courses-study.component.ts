import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-study',
  templateUrl: './courses-study.component.html',
  styleUrls: ['./courses-study.component.css']
})
export class CoursesStudyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    setTimeout(() => {
      this.navBar()
    }, 1000);
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

}
