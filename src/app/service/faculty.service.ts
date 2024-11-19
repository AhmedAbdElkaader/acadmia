import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(public http :HttpClient) { }

  facultyHome(facultyId,branch_id){
    return this.http.get(`${environment.baseUrl}api/General/GetFacultyHomePage?facultyId=${facultyId}&NewsCount=4&eventsCount=4&ResearchesCount=4&branchId=${branch_id}`)
  }

  facultyAbout(facultyId,branchID){
    return this.http.get(`${environment.baseUrl}api/AcademyOfArtApi/GetFacultydetails?facultyId=${facultyId}&branchId=${branchID}`)
  }

  facultyReserch(facultyid){
    return this.http.get(`${environment.baseUrl}api/General/GetResearches?count=10&pageNumber=1&facultyid=${facultyid}`)
  }

  depart_details(id:any,branchID){
    return this.http.get(`${environment.baseUrl}api/General/GetDepartmentDetails?DeptId=${id}&branchId=${branchID}`)
  }

  faculty_fees(id){
    return this.http.get(`${environment.baseUrl}api/General/GetfacultyStudyFees?FacultyID=${id}`)

  }

  facultyNews(id){
    return this.http.get(`${environment.baseUrl}api/General/GetNews?count=20&pageNumber=1&facultyid=${id}`)
  }

  facultyEvents(id){
    return this.http.get(`${environment.baseUrl}api/General/GetEvents?count=10&pageNumber=1&facultyid=${id}`)
  }

  faculty_submit_rule(id){
    return this.http.get(`${environment.baseUrl}api/General/getFacultySubmissionRules?FacultyID=${id}`)

  }

  faculty_department(id,branchId){
    return this.http.get(`${environment.baseUrl}api/General/GetBranchesFacultiesDepartments?facultyId=${id}&branchId=${branchId}`)
  }
  GetAllTeachingMembers(facultyID?){
    if(facultyID){
      return this.http.get(`${environment.baseUrl}api/General/GetAllTeachingMembers?facultyID=${facultyID}`)
    }else {
      return this.http.get(`${environment.baseUrl}api/General/GetAllTeachingMembers`)

    }
  }
  getTechDteails(id){
    return this.http.get(`${environment.baseUrl}api/General/GetTeachingMemberData?id=${id}`)
  }
}
