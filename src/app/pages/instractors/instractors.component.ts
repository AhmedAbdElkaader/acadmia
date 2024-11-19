import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-instractors',
  templateUrl: './instractors.component.html',
  styleUrls: ['./instractors.component.css']
})
export class InstractorsComponent implements OnInit {
  facultyId
  facultyTechGroup
  techDetails:any = {}
  SLIDER_IMAGE = ''
  facultyName : ''
  facult_date : ''
  facultyMainTech:any[] = []
  constructor(private route: ActivatedRoute ,
    private router:Router,
     private rest: FacultyService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.navBar()
    }, 1000);
    window.scroll(0,0)
    this.facultyId = this.route.snapshot.paramMap.get('id')
    this.getData()
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

  getData(){
    let branch_id = localStorage.getItem('branch_id')
    if(branch_id){

    }else {
      branch_id = '5'
    }
    this.rest.facultyHome(this.facultyId,branch_id).subscribe((res:any) => {
      console.log(res)
      this.SLIDER_IMAGE = res.SLIDER_IMAGE
      this.facultyName = res.FACULTY_NAME
      this.facult_date = res.DATE_ESTABLISH
    })

    this.rest.GetAllTeachingMembers(this.facultyId).subscribe((res: any) => {
      console.log(res)
      this.facultyTechGroup = res.teachingmembersGroup
      this.facultyMainTech.push(res.academyPresident)
      this.facultyMainTech.push(res.academyVicePresident)
      res.facultyDeans.forEach(element => {
        this.facultyMainTech.push(element)
      });
    })
  }

  scroolDowen(elemnt_id){
    document.getElementById(elemnt_id).scrollIntoView()
  }


  techData(id){
    // this.rest.getTechDteails(id).subscribe(res => {
    //   console.log(res)
    //   this.techDetails = res
    // })
    this.router.navigate(['/instractors_details',this.facultyId,id])
  }
}
