import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FacultyService } from 'src/app/service/faculty.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education-system',
  templateUrl: './education-system.component.html',
  styleUrls: ['./education-system.component.css']
})
export class EducationSystemComponent implements OnInit , AfterViewInit{
  facultyId
  Mo3tamd_egyptian_egp_fees = 0
  Mo3tamd_forgnier_egp_fees = 0
  Mo3tamd_forgnier_usd_fees = 0
  credit_egyptian_egp_fees = 0
  credit_forgnier_egp_fees = 0
  credit_forgnier_usd_fees = 0
  faculty_name = ''
  faculty_image = ''
  faculty_depart 
  has_credit = true
  constructor(private faculty_serv : FacultyService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.facultyId = this.route.snapshot.paramMap.get('id')
    this.faculty_image =  localStorage.getItem('faculty_image')
  
    window.scroll(0,0)
    setTimeout(() => {
      this.navBar()
      
    }, 1000);
    this.get_data()
   
  }
  ngAfterViewInit(){
   
  }

  get_data(){
    this.faculty_serv.faculty_fees(this.facultyId).subscribe((res:any) => {
      console.log(res)
      this.Mo3tamd_egyptian_egp_fees = res.Mo3tamd_egyptian_egp_fees.slice(0,-3)
      this.Mo3tamd_forgnier_egp_fees = res.Mo3tamd_forgnier_egp_fees.slice(0,-3)
      this.Mo3tamd_forgnier_usd_fees = res.Mo3tamd_forgnier_usd_fees.slice(0,-3)
      this.credit_egyptian_egp_fees = res.credit_egyptian_egp_fees.slice(0,-3)
      this.credit_forgnier_egp_fees = res.credit_forgnier_egp_fees.slice(0,-3)
      this.credit_forgnier_usd_fees = res.credit_forgnier_usd_fees.slice(0,-3)
      this.faculty_name = res.faculty_name
      this.faculty_depart = res.departmentsList
      this.has_credit = res.has_credit
      let elemnt = localStorage.getItem('elemnt')
      if(elemnt){
        if(elemnt == 'true'){
          this.scroolDowen('elemnt')
        }else {
          this.scroolDowen('element1')
        }
      }
    })
  }

  scroolDowen(elemnt_id){
    document.getElementById(elemnt_id).scrollIntoView()
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
