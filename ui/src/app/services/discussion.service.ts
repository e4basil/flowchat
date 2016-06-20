import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {UserService} from './user.service';

@Injectable()
export class DiscussionService {

  private discussionUrl: string = 'http://localhost:4567/get_discussion/';

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http,
    private userService: UserService) {
    this.headers = new Headers(
      { 'Content-Type': 'application/json',
        'user': JSON.stringify(this.userService.getUser())});

    this.options = new RequestOptions({ headers: this.headers });
  }

  getDiscussion(id: number) {
    return this.http.get(this.discussionUrl + id, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // We'd also dig deeper into the error to get a better message
    let errMsg = error;
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
