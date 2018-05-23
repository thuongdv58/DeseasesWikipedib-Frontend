import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchForDeseases(content: string){
    return [{
      id: 1,
      name: "blah blah"
    },
    {
      id: 1,
      name: "shot"
    },
    {
      id: 2,
      name: "shjt"
    }]
  }

  getSearchRecommendation(content: string){
    return [
      {
        id: 2,
        name: "wahh"
      },
      {
        id: 3,
        name: "hell yeah"
      }
    ]
  }
}
