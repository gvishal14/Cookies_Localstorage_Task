import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cookies_Localstorage_Task';
  constructor(private cookieService: CookieService, private localSt: LocalStorageService, private sessionSt: SessionStorageService){}

  setCookies(){
    this.cookieService.set('test', 'testing cookie');
  }
  getCookies(){
    alert(this.cookieService.get("test"));
  }
  delCookies(){
    this.cookieService.delete("test");
  }

  // --------------------------------Local Storage-------------------------


  setLocalStorage(){
    this.localSt.store('UserName', 'Vishal Gupta');
  }
  getLocalStorage(){
    alert(this.localSt.retrieve("UserName"));
  }
  delLocalStorage(){
    this.localSt.clear("boundValue");
  }

// --------------------------------------Session Storage------------------

  setSessionStorage(){
    this.sessionSt.store('logged-in', 'user');
  }
  getSessionStorage(){
    alert(this.sessionSt.retrieve("logged-in"));
  }
  delSessionStorage(){
    this.sessionSt.clear("logged-in");
  }
}
