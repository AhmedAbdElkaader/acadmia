import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserch-details',
  templateUrl: './reserch-details.component.html',
  styleUrls: ['./reserch-details.component.css']
})
export class ReserchDetailsComponent implements OnInit {

  research_id
  reserch_details = {
    DETAILS : '',
    IMG_PATH : '',
    TITLE : '',
    faculty_name : '',
  }
  constructor(private rest : RestService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.research_id = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.research_detail(this.research_id).subscribe((res:any) =>{
      console.log(res)
      this.reserch_details = res
    })
  }

}
