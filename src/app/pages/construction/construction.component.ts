import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {
  faculty_image:any
  CONSTRUCTION_ABOUT:any
  CONSTRUCTION_NAME:any
  subdetailslist:any[]
  galleryArry:any
  id
  showView = false
  CONSTRUCTIONObj:any
  constructor(private rest : RestService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.id = this.route.snapshot.paramMap.get('id')
    this.getConstrction()
  }

  getConstrction(){
    this.rest.getConstrction(this.id).subscribe((res:any) => {
      console.log(res)
      this.CONSTRUCTIONObj = res
      if(res.CONSTRUCTION_NAME == "وحدة ضمان الجودة"){
        this.showView = false
      }else {
        this.faculty_image = res.CONSTRUCTION_IMG_PATH
        this.CONSTRUCTION_ABOUT = res.CONSTRUCTION_ABOUT
        this.CONSTRUCTION_NAME = res.CONSTRUCTION_NAME
        this.subdetailslist = res.subdetailslist
        this.galleryArry = res.gallery
        this.showView = true
      }
    
    })
  }

  src_image:any = ''
  openImage(src){
    this.src_image = src
  }

}
