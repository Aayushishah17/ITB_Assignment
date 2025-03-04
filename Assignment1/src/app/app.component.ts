import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgotpasswordComponent } from './auth-user/forgotpassword/forgotpassword.component';
import { UserpageComponent } from './auth-user/userpage/userpage.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,RegisterComponent,ForgotpasswordComponent,UserpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
