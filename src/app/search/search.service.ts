import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchForDeseases(content: string, page: Number){
    return [{
      id: 1,
      name: "Blah blah benh",
      abstract: "<p>Blah something fucking awesome here hehe. there you got a shitty desease which no one can cure!</p> <p>Blah something fucking awesome here hehe. there you got a shitty desease which no one can cure!</p>"
    },
    {
      id: 5,
      name: "Shot your ass",
      abstract: "<p>Blah something fucking awesome here hehe. there you got a shitty desease which no one can cure!</p> <p>Blah something fucking awesome here hehe. there you got a shitty desease which no one can cure!</p>"
    },
    {
      id: 2,
      name: "Shjt your face",
      abstract: "<p>Blah something fucking awesome here hehe. there you got a shitty desease which no one can cure!</p> <p>Blah something fucking awesome here hehe. there you got a shitty desease which no one can cure!</p>"
    }]
  }

  getSearchRecommendation(content: string){
    return [
      {
        id: 2,
        name: "Tâm thần"
      },
      {
        id: 3,
        name: "Động kinh"
      },
      {
        id: 6,
        name: "Vãi cc1"
      }
    ]
  }
}
