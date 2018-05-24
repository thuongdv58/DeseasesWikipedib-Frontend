import { Component, OnInit } from '@angular/core';
import { DeseasesService } from './deseases.service';
import { SearchService } from '../search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deseases',
  templateUrl: './deseases.component.html',
  styleUrls: ['./deseases.component.css']
})
export class DeseasesComponent implements OnInit {

  deseases: any;
  selectedDesease: any;
  searchContent: string;
  searchResults: any;
  currentPage: number = 1;
  constructor(private deseaseService: DeseasesService, private searchService: SearchService, private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(queries => {
      this.searchContent = queries.searchContent;
    })
  }

  ngOnInit() {
    this.getDeseaseData();
  }

  getDeseaseData(){
    if (this.searchContent) {
      this.searchResults = this.searchService.searchForDeseases(this.searchContent, this.currentPage);
    }
    else {
      this.deseases = this.deseaseService.getDeseaseList(this.currentPage);
    }
  }
  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.getDeseaseData();
  }

  public onSelect(data) {
    this.selectedDesease = data;
  }
}
