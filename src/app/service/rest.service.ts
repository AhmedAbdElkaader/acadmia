import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http :HttpClient) { }

  // https://api.aoa.edu.eg/api/

  GetBranchesFaculties(){
    return this.http.get(`${environment.baseUrl}api/InnovativeChild/GetBranchesFaculties`)
  }

  // home page
  homePage (){
    return this.http.get(`${environment.baseUrl}api/General/GetHomePage?NewsCount=4&eventsCount=4&ResearchesCount=4&GraduatesCount=4`)
  }
  //  end home
  getbranch(){
    return this.http.get(`${environment.baseUrl}api/InnovativeChild/GetBranchesStructure`)
  }

  getGendar(){
    return this.http.get(`${environment.baseUrl}api/InnovativeChild/GetGender`)
  }

  getNationalities(){
    return this.http.get(`${environment.baseUrl}api/InnovativeChild/GetNationalities`)
  }

  GetAllowedPreCertificates(){
    return this.http.get(`${environment.baseUrl}api/General/GetAllowedPreCertificates`)
  }
  registerForm(value){
    let formData = new FormData()
    for (var i = 0; i < value.length; i++) {
      if(value[i].status){
        formData.append("text", JSON.stringify(value[i]));
      }else {
        formData.append("file[]", value[i]);
      }
    }
    formData.append("file", JSON.stringify(value));

    return this.http.post(`${environment.baseUrl}api/InnovativeChild/STUDENT_REGESTRATION`,formData)
  }


  // news 

  getNews(count,page){
    return this.http.get(`${environment.baseUrl}api/General/GetNews?count=${count}&pageNumber=${page}&facultyid="`)
  }
  newsDetails(id){
    return this.http.get(`${environment.baseUrl}api/General/GetNewsDetail?ID=${id}`)
  }

  // events

  getEvents(){
    return this.http.get(`${environment.baseUrl}api/General/GetEvents?count=10&pageNumber=1`)
  }
  eventDetails(id){
    return this.http.get(`${environment.baseUrl}api/General/GetEventDetails?id=${id}`)
  }

  // research 

  getResearch(){
    return this.http.get(`${environment.baseUrl}api/General/GetResearches?count=10&pageNumber=1`)
  }

  research_detail(id){
    return this.http.get(`${environment.baseUrl}api/General/GetResearchesDetails?id=${id}`)
  }

  GetConditionsAndTerms(){
    return this.http.get(`${environment.baseUrl}api/General/GetConditionsAndTerms`)

  }

  filesSupport(){
    return this.http.get(`${environment.baseUrl}api/General/GetApplicationFormsFiles`)

  }

  getConstrction(id){
    return this.http.get(`${environment.baseUrl}api/General/GetConstructionDetails?id=${id}`)
  }

}
