import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/service/faculty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faculty_id
  facultyName = ''
  facult_date = ''
  SLIDER_IMAGE = ''
  generalsubmissionrules
  faculty_admission_rules
  departments_admission_list
  departments_Exams_list
  admission_fees_credit
  admission_fees_mo3tmd
  constructor(private rest : FacultyService , private router :ActivatedRoute ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.navBar()
    }, 1000);
    window.scroll(0,0)
    this.faculty_id = this.router.snapshot.paramMap.get('id')
   
    this.getData()
  }

  getData(){
    let branch_id = localStorage.getItem('branch_id')
    if(branch_id){

    }else {
      branch_id = '5'
    }
    this.rest.facultyHome(this.faculty_id,branch_id).subscribe((res:any) => {
      console.log(res)
      this.SLIDER_IMAGE = res.SLIDER_IMAGE
      this.facultyName = res.FACULTY_NAME
      this.facult_date = res.DATE_ESTABLISH
    })

    this.rest.faculty_submit_rule(this.faculty_id).subscribe((res:any) => {
      console.log("res submit" , res)
      this.generalsubmissionrules = res.generalsubmissionrules
      this.faculty_admission_rules = res.faculty_admission_rules
      this.departments_admission_list = res.departments_admission_list
      this.departments_Exams_list = res.departments_Exams_list
      this.admission_fees_mo3tmd = res.admission_fees_mo3tmd
      this.admission_fees_credit = res.admission_fees_credit
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
}
