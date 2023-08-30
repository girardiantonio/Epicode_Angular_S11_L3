import { Component } from '@angular/core';
import { IUser } from '../pages/auth/interfaces/user';
import { AuthService } from '../pages/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  profile!: IUser

  constructor( private authService : AuthService ) { }

  ngOnInit(): void {
    localStorage.getItem('accessData')
    let completeProfile = JSON.parse(localStorage.getItem('accessData')!)
    this.profile = completeProfile.user
    window.onload = () => {
      this.authService.restoreUser()
    }
  }

}
