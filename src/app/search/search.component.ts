import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { Router, Route } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  recommendations: any;
  // searchResults: any;

  constructor(private searchService: SearchService, private formBuilder: FormBuilder, private router: Router) {
    this.searchForm = formBuilder.group({
      searchContent: [null, Validators.required]
    })
  }
  ngOnInit() {
    this.searchForm.get("searchContent").valueChanges
      .pipe(debounceTime(400))
      .subscribe((searchContent) => {
        if (searchContent) {
          this.recommendations = this.searchService.getSearchRecommendation(searchContent);
        } else {
          this.recommendations = [];
        }
      })
  }

  search(formData) {
    // this.searchResults = this.searchService.searchForDeseases(formData.searchContent);
    this.router.navigate(["/deseases"], {queryParams: {searchContent: formData.searchContent}});
  }

  keyDownFunction(event) {
    if (event.keyCode == 13 && this.searchForm.valid) {
      this.search(this.searchForm.value);
    }
  }
}
