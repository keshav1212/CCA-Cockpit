import { Component } from '@angular/core';
import { SearchService } from '../search.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent {

  Date1: Date= new Date();
  LocalDate : String= new Date().toLocaleString();
  search : String="";
  searchText='';

  constructor(private searchService: SearchService){}

  applyFilter(){
    this.searchService.setSearchText(this.searchText);
  }
}
