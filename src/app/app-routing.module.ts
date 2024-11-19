import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { DepartmentComponent } from './pages/department/department.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { HeaderComponent } from './pages/header/header.component';
import { EventComponent } from './pages/event/event.component';
import { CoursComponent } from './pages/cours/cours.component';
import { EducationSystemComponent } from './pages/education-system/education-system.component';
import { ReserchDetailsComponent } from './pages/reserch-details/reserch-details.component';
import { BachelorStudyComponent } from './pages/bachelor-study/bachelor-study.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { ReserchListComponent } from './pages/reserch-list/reserch-list.component';
import { CoursesStudyComponent } from './pages/courses-study/courses-study.component';
import { MasterStudyComponent } from './pages/master-study/master-study.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { FacultyNewsListingComponent } from './pages/faculty-news-listing/faculty-news-listing.component';
import { FacultyEventsComponent } from './pages/faculty-events/faculty-events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CourseRegisterComponent } from './pages/course-register/course-register.component';
import { CourseRegisterConfirmComponent } from './pages/course-register-confirm/course-register-confirm.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AcadmyFormComponent } from './pages/acadmy-form/acadmy-form.component';
import { AcadmyCondtionsComponent } from './pages/acadmy-condtions/acadmy-condtions.component';
import { ReserchFacultyComponent } from './pages/reserch-faculty/reserch-faculty.component';
import { InstractorsComponent } from './pages/instractors/instractors.component';
import { AcadmyInstractorComponent } from './pages/acadmy-instractor/acadmy-instractor.component';
import { ConstructionComponent } from './pages/construction/construction.component';
import { InstrctorDetailsComponent } from './pages/instrctor-details/instrctor-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register/:id', component: RegisterComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'department/:id', component: DepartmentComponent },
  { path: 'faculty/:id', component: FacultyComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'events', component: EventComponent },
  { path: 'course_details', component: CoursComponent },
  { path: 'Education_system/:id', component: EducationSystemComponent },
  { path: 'research_details/:id', component: ReserchDetailsComponent },
  { path: 'bachelor_study', component: BachelorStudyComponent },
  { path: 'news_list', component: NewsListComponent },
  { path: 'research_list', component: ReserchListComponent },
  { path: 'courses_study', component: CoursesStudyComponent },
  { path: 'master_study', component: MasterStudyComponent },
  { path: 'news_details/:id', component: NewsDetailsComponent },
  { path: 'search_result', component: SearchResultComponent },
  { path: 'faculty_news_listing/:id', component: FacultyNewsListingComponent },
  { path: 'faculty_Events/:id', component: FacultyEventsComponent },
  { path: 'event_Details/:id', component: EventDetailsComponent },
  { path: 'course_Register', component: CourseRegisterComponent },
  { path: 'course_Register_Confirm', component: CourseRegisterConfirmComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'academy_register', component: AcadmyFormComponent },
  { path: 'academy_conditions', component: AcadmyCondtionsComponent },
  { path: 'instractors/:id', component: InstractorsComponent },
  { path: 'academy_instractors', component: AcadmyInstractorComponent },
  { path: 'constrction/:id', component: ConstructionComponent },
  { path: 'instractors_details/:id/:name', component: InstrctorDetailsComponent },
  { path: 'research_faculty_list/:id', component: ReserchFacultyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
