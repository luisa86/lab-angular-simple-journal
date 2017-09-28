import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs'

@Injectable()
export class JournalEntriesService {

  BASE_URL: string= 'http://localhost:3000';

  constructor(private http: Http) { }

  getList(){
    return this.http.get(`{$BASE_URL}/api/entries`)
        .map((res) => res.json())
  }


}
