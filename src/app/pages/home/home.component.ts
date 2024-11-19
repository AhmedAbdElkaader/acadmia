import { Component, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { RestService } from 'src/app/service/rest.service';
import { SwiperComponent } from "swiper/angular";
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper;
  
  newsArr;
  faculty_count = 0
  newsArr2 = [];
  Researches;
  events
  faucltyArr:any = [
    {SLIDER_IMAGE : "assets/img/listNews2.jpg"}
  ];
  gradution_arr 
  gallery
  configheroOne: SwiperOptions = {
    spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
      // thumbs: {
      //   swiper: this.swiper,
      // },
  };
  configherotow: SwiperOptions = {
    spaceBetween: 0,
    //loop: true,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  };
  gradConfig: SwiperOptions = {
    spaceBetween: 0,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  };
  newsConfig: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 30,
    
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  eventConfig: SwiperOptions = {
    slidesPerView: "auto",
      spaceBetween: 0,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  };
  galley_Config: SwiperOptions = {
    slidesPerView: 2,
      spaceBetween: 0,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  };
  mangerConfig: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  }
  facultyMainTech:any[] = []
  facultyTechGroup
  techDetails:any = {}
  IS_REGISTRATION_OPEN = false
  constructor(private rest: RestService ,
    private facultyService: FacultyService,
    private route : Router) { }

  ngOnInit() {
    this.menu()
    this.homeapi()
    this.getBranch()
  }

  getBranch() {
    this.rest.getbranch().subscribe((res: any) => {
      console.log("branches",res)
      this.IS_REGISTRATION_OPEN = res.IS_REGISTRATION_OPEN
      localStorage.setItem('myArray', JSON.stringify(res));
    })
  }
  
  Vission
  Academy_president_name
  Academy_president_img
  Academy_Vice_president_name
  Academy_Vice_president_img
  Academy_Vice_president_about
  Academy_president_about
  misson
  goals
  massege : ''
  homeapi() {
    this.rest.homePage().subscribe((res: any) => {
      console.log("home", res)
      this.Vission = res.Vission
      this.Academy_president_name = res.Academy_president_name
      this.Academy_president_img = res.Academy_president_img
      this.Academy_Vice_president_name = res.Academy_Vice_president_name
      this.Academy_Vice_president_img = res.Academy_Vice_president_img
      this.Academy_Vice_president_about = res.Academy_Vice_president_about
      this.Academy_president_about = res.Academy_president_about
      this.newsArr2.push(res.News[0])
      this.newsArr = res.News
      this.newsArr.splice(0,1)
      this.Researches = res.Researches
      this.events = res.Events
      this.faucltyArr = res.faculty
      this.faculty_count = res.faculty.length
      this.gradution_arr = res.graduates
      this.gallery = res.gallery
      this.misson = res.mission
      this.goals = res.goals
      this.massege = res.message
    })

    this.facultyService.GetAllTeachingMembers().subscribe((res: any) => {
      console.log("instractors",res)
      this.facultyTechGroup = res.teachingmembersGroup
      this.facultyMainTech.push(res.academyPresident)
      this.facultyMainTech.push(res.academyVicePresident)
      res.facultyDeans.forEach(element => {
        this.facultyMainTech.push(element)
      });
    })
  }
  techData(id){
    this.facultyService.getTechDteails(id).subscribe(res => {
      console.log(res)
      this.techDetails = res
    })
  }
  scroolDowen(elemnt_id){
    document.getElementById(elemnt_id).scrollIntoView()
  }

  
  newsDetails(id){
    this.route.navigate(['/news_details',id])
  }

  eventDetails(id){
    this.route.navigate(['/event_Details',id])
  }

  Details(item){
    this.route.navigate(['/research_details',item.ID])
  }
  
  menu(){
    var scrollpos = window.scrollY;
    var nav = document.getElementsByClassName("main-nav-container")[0];

    function add_class_on_scroll() {
      nav.classList.add("bg-white");
    }

    function remove_class_on_scroll() {
      nav.classList.remove("bg-white");
    }

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;
      var intFrameHeight = window.innerHeight - 100;
      if (scrollpos > intFrameHeight) {
        add_class_on_scroll();
      }
      else {
        remove_class_on_scroll();
      }
    });

    
  }

  go_to_faculty(item){
    console.log(item)
    localStorage.setItem('FACULTY_NAME', item.FACULTY_NAME)
    localStorage.setItem("facultyId",item.ID)
    this.route.navigate(['/faculty',item.ID])
  }
  src_image:any = ''
  openImage(src){
    this.src_image = src
  }

}
