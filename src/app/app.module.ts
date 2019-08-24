import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from 'src/course.service';
import { DataAndEventComponent } from './data-and-event/data-and-event.component';
import { DataAndEvent2Component } from './data-and-event2/data-and-event2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './common/pipe/summary.pipe';
import { FavComponent } from './fav/fav.component';
import { ReusableDemoComponent } from './reusable-demo/reusable-demo.component';
import { BasicComponent } from './layout/basic/basic.component';
import { HeaderComponent } from './layout/common/header/header.component';
import { FooterComponent } from './layout/common/footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { InputFormatDirective } from './common/directive/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './signup/signup.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/errors/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataAndEventComponent,
    DataAndEvent2Component,
    PipesComponent,
    SummaryPipe,
    FavComponent,
    ReusableDemoComponent,
    BasicComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupComponent,
    ToDoListComponent,
    FormBuilderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
