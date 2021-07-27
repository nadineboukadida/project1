import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';
import { NoticesService } from './service/notices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginService , private router: Router, private noticeservice : NoticesService) {
 
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if (this.auth.authenticated) {return true;}
      
this.noticeservice.changeMode({msg:"Acces Denied! Log in first" ,valid:false})
   this.router.navigate(['/login']);
      return true;
  }
  
}
