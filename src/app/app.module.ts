import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';


import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { ForgotPasswordComponent } from './core/forget-password/forget-password.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { ChangePasswordComponent } from './core/change-password/change-password.component';


import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';


import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';


import { CenterFormComponent } from './admin/components/center-form/center-form.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PagenotfoundComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CenterFormComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // FIXED
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
