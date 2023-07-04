import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject=new Subject<string>();
  search$=this.searchSubject.asObservable();

  setSearchText(searchText:string){
    this.searchSubject.next(searchText);
  }

  constructor() { }
}
