import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import Swiper, { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  sliderNews;
  itemOne;
  itemtow;
  topNews;
  LatestNews:any;
  config: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 15,
  };
  constructor(private rest : RestService , private route : Router) { }

  count = 20
  pageindex = 1
  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.getNews()
  }

  getNews(){
    this.rest.getNews(this.count, this.pageindex).subscribe((res :any) => {
      console.log(res)
      this.itemOne = [res.SliderNews[0]]
      this.itemtow = [res.SliderNews[1],res.SliderNews[2]]
      this.sliderNews = res.SliderNews
      this.topNews = res.TopNews
      this.LatestNews = res.LatestNews
      console.log(this.itemOne)
    })
  }

  moreNews(){
    this.pageindex = this.pageindex + 1
    this.rest.getNews(this.count, this.pageindex).subscribe((res:any) => {
      console.log(res.LatestNews)
      res.LatestNews.forEach(element => {
        this.LatestNews.push(element)
      });
    })
  }

  newsDetails(item){
    this.route.navigate(['/news_details',item.ID])
  }

}
