import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-reserch-faculty',
  templateUrl: './reserch-faculty.component.html',
  styleUrls: ['./reserch-faculty.component.css']
})
export class ReserchFacultyComponent implements OnInit {

  resaerchList;
  faculty_id
  FACULTY_NAME
  constructor(private rest : FacultyService , 
    private router: ActivatedRoute,
    private route : Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
   this.FACULTY_NAME =  localStorage.getItem('FACULTY_NAME')
    this.faculty_id = this.router.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.facultyReserch(this.faculty_id).subscribe(res => {
      console.log(res)
      this.resaerchList = res
    })

  }

  Details(item){
    this.route.navigate(['/research_details',item.ID])
  }
}
