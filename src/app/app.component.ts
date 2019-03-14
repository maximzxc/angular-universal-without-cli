import {OnInit, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and webpack (without ng-cli)</h1>
  <h2>{{textOnLoad}}</h2>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
    public _textOnLoad: Observable<any>;
    public textOnLoad: string;
    private serverUrl = 'http://127.0.0.1:8000/config-on-load';
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getConfig().subscribe(config => {
            this.textOnLoad = config.textOnLoad;
        });
    }

    getConfig(): Observable<any> {
        return this.http.get(this.serverUrl);
    }

}
