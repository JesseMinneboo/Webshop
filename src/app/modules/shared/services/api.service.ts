import {Injectable, SkipSelf} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

interface IApiOptions {
  auth?: boolean;
  endpoint?: string;
  body?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: any;
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    [key: string]: any;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:  HttpClient) { }
  private static readonly baseUrl = 'http://localhost:9000';
  private static readonly prefix = '/api';

  get(options: IApiOptions): Observable<any> {
    options = this.configureOptions(options);

    try {
      return this.http.get(this.generateUrl(options.endpoint), options.body);
    } catch (e) {
      console.error(e);
    }
  }

  post(options: IApiOptions): Observable<any> {
    options = this.configureOptions(options);

    try {
      return this.http.post(this.generateUrl(options.endpoint), options.body, {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      });
    } catch (e) {
      console.error(e);
    }
  }

  put(options: IApiOptions): Observable<any> {
    options = this.configureOptions(options);

    try {
      return this.http.put(this.generateUrl(options.endpoint), options.body);
    } catch (e) {
      console.error(e);
    }
  }

  delete(options: IApiOptions): Observable<any> {
    options = this.configureOptions(options);

    try {
      return this.http.delete(this.generateUrl(options.endpoint), options.body);
    } catch (e) {
      console.error(e);
    }
  }

  configureOptions = (options: IApiOptions): IApiOptions => {
    options = this.setOptionsDefaults(options);
    options = this.setAuthHeaderIfNeeded(options);

    return options;
  }

  getApiUrl = (): string => ApiService.baseUrl + ApiService.prefix;

  generateUrl = (endpoint: string) => this.getApiUrl() + endpoint;

  setOptionsDefaults = (options: IApiOptions): IApiOptions => {
    const defaultOptions: IApiOptions = {
      auth: false,
      endpoint: '',
      body: {}
    };

    return { ...defaultOptions, ...options };
  }


  setAuthHeaderIfNeeded(options: IApiOptions): IApiOptions {
    options.body.headers = {
      auth: options.auth
        ? 'true'
        : 'false'
    };

    return options;
  }
}
