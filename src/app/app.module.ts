import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFooterAngularComponent } from './my-footer-angular/my-footer-angular.component';
import { MyHeaderAngularComponent } from './my-header-angular/my-header-angular.component';
import { MyPipesAngularComponent } from './my-pipes-angular/my-pipes-angular.component';
import {HttpClientModule} from '@angular/common/http'
import { MySqrtPipePipe } from './my-sqrt-pipe.pipe';
import { MyServiceAngularComponent } from './my-service-angular/my-service-angular.component';
import { MyServiceFullDetailsAngularComponent } from './my-service-full-details-angular/my-service-full-details-angular.component';
import { MyService } from './my.service'; 
import {ProductService} from './product.service';
import { ProductlistComponent } from './productlist/productlist.component'; 
import { ProductformsComponent } from './productforms/productforms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CoursesComponentComponent } from './courses-component/courses-component.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { ContactUsComponentComponent } from './contact-us-component/contact-us-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckpipePipe } from './checkpipe.pipe';
import {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';
import { ChildviewComponent } from './childview/childview.component';
import { ParentviewComponent } from './parentview/parentview.component';
import { ChecksingleComponent } from './checksingle/checksingle.component';
import { CheckboxpracticeComponent } from './checkboxpractice/checkboxpractice.component';
import { RouterparamComponent } from './routerparam/routerparam.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFooterAngularComponent,
    MyHeaderAngularComponent,
    MyPipesAngularComponent,
    MySqrtPipePipe,
    MyServiceAngularComponent,
    MyServiceFullDetailsAngularComponent,
    ProductlistComponent,
    ProductformsComponent,
    ReactiveformComponent,
    RoutingComponent,
    HomeComponentComponent,
    CoursesComponentComponent,
    PaymentComponentComponent,
    ContactUsComponentComponent,
    PagenotfoundComponent,
    CheckpipePipe,
    SignupComponent,
    SigninComponent,
    PracticeFormComponent,
    ChildviewComponent,
    ParentviewComponent,
    ChecksingleComponent,
    CheckboxpracticeComponent,
    RouterparamComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     
      {path:"",redirectTo:'/home',pathMatch:'full'},
      {path:"home/:id",component:HomeComponentComponent},
      {path:"courses/:id",component:CoursesComponentComponent},
      {path:"payment/:id",component:PaymentComponentComponent},
      {path:"contactus/:id",component:ContactUsComponentComponent},
      {path:"signin",component:SigninComponent},
      {path:"signup",component:SignupComponent},
      {path:"check/:id",component:RouterparamComponent},
      {path:"**",component:PagenotfoundComponent},
    ]),
    HttpClientModule
  ],
  providers: [MyService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
