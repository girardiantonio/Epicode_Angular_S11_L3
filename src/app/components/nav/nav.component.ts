import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  testo: string = ''

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  active():boolean{
    return this.router.url === '/dashboard'
  }

  logout(){
    this.authService.logout()
  }

  titolo(){
    return this.router.url === '/dashboard' ? this.testo = 'Eccoti di nuovo' : this.testo = 'Benvenuto'
  }

}
