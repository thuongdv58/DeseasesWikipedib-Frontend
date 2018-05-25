import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseasesService {

  constructor() { }

  getDeseaseList(page: number, pageSize: number) {
    return [
      { id: 11, name: 'Mr. Nice', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time"},
      { id: 12, name: 'Narco', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time"},
      { id: 13, name: 'Bombasto', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 14, name: 'Celeritas', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 15, name: 'Magneta', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 16, name: 'RubberMan', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 17, name: 'Dynama', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 18, name: 'Dr IQ', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 19, name: 'Magma', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" },
      { id: 20, name: 'Tornado', abstract: "what cause this desease?? so ez. It's because u eat too much shit in a short time! what cause this desease?? so ez. It's because u eat too much shit in a short time" }
    ]
  }
  getDeseaseDetail(id: number) {
    return {
      id: 34,
      name: "Wooooffe Woffffffeffefffeefefef",
      abstract: "A desease that kill everyone within minutes. So nobody can help you now. go die!",
      attributes: [
        {
          name: "Medicine",
          content: "shit, dog shit"
        },
        {
          name: "Docter",
          content: "Dog, Cat"
        },
        {
          name: "Time to die",
          content: "apparently 3 hours left"
        }
      ]
    }
  }
  updateADesease(id: number, newContent: any) {

  }
  deleteADesease(id: number) {
    console.log('deleted', id);
  }
}
