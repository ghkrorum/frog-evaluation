import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUp } from '../../models/sign-up.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http: HttpClient
  ) { }

  create(user: SignUp) {
    return this.http.post(`${environment.url_api}/sign-up`, user);
  }
}
