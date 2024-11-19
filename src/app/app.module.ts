import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { DepartmentComponent } from './pages/department/department.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { HeaderComponent } from './pages/header/header.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
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
import { AppNavComponent } from './pages/app-nav/app-nav.component';
import { FacultyNewsListingComponent } from './pages/faculty-news-listing/faculty-news-listing.component';
import { FacultyEventsComponent } from './pages/faculty-events/faculty-events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CourseRegisterComponent } from './pages/course-register/course-register.component';
import { CourseRegisterConfirmComponent } from './pages/course-register-confirm/course-register-confirm.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AcadmyFormComponent } from './pages/acadmy-form/acadmy-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcadmyPaymentComponent } from './pages/acadmy-payment/acadmy-payment.component';
import { AcadmyCondtionsComponent } from './pages/acadmy-condtions/acadmy-condtions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { SwiperModule } from 'swiper/angular';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ReserchFacultyComponent } from './pages/reserch-faculty/reserch-faculty.component';
import { InstractorsComponent } from './pages/instractors/instractors.component';
import { AcadmyInstractorComponent } from './pages/acadmy-instractor/acadmy-instractor.component';
import { ConstructionComponent } from './pages/construction/construction.component';
import { InstrctorDetailsComponent } from './pages/instrctor-details/instrctor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    AboutComponent,
    DepartmentComponent,
    FacultyComponent,
    HeaderComponent,
    WhatsappComponent,
    EventComponent,
    CoursComponent,
    EducationSystemComponent,
    ReserchDetailsComponent,
    BachelorStudyComponent,
    NewsListComponent,
    ReserchListComponent,
    CoursesStudyComponent,
    MasterStudyComponent,
    NewsDetailsComponent,
    SearchResultComponent,
    AppNavComponent,
    FacultyNewsListingComponent,
    FacultyEventsComponent,
    EventDetailsComponent,
    CourseRegisterComponent,
    CourseRegisterConfirmComponent,
    ContactUsComponent,
    AcadmyFormComponent,
    AcadmyPaymentComponent,
    AcadmyCondtionsComponent,
    ReserchFacultyComponent,
    InstractorsComponent,
    AcadmyInstractorComponent,
    ConstructionComponent,
    InstrctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     MatProgressSpinnerModule,
     NgxUsefulSwiperModule,
    // SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
