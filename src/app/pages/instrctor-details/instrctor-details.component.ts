import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { FacultyService } from 'src/app/service/faculty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instrctor-details',
  templateUrl: './instrctor-details.component.html',
  styleUrls: ['./instrctor-details.component.css']
})
export class InstrctorDetailsComponent implements OnInit {
  SLIDER_IMAGE = ''
  facultyName : ''
  facult_date : ''
  facultyId
  instrctorId
  techDetails
  constructor(private rest : FacultyService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.facultyId = this.route.snapshot.paramMap.get('id')
    this.instrctorId = this.route.snapshot.paramMap.get('name')
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
    this.getData()
  }

  getData(){
    this.rest.getTechDteails(this.instrctorId).subscribe(res => {
      console.log(res)
      this.techDetails = res
    })
  }

}
