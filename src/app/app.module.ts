import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CoursesService } from './courses.service';
// import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
