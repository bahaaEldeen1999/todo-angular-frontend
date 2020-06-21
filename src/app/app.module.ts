import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module'; 
import { NbButtonModule,NbInputModule,NbLayoutModule,NbThemeModule,NbListModule,NbCardModule, NbIconModule, NbAlertModule, NbSpinnerModule  } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    SignupComponent   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbListModule,
    NbCardModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbAlertModule,
    NbSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
