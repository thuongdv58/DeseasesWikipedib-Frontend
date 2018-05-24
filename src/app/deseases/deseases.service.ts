import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseasesService {

  constructor() { }

  getDeseaseList(page: number) {
    return [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]
  }
  getDeseaseDetail(id: number) {
    return {
      id: 34,
      name: "wha",
      abstract: "A desease that kill everyone within minutes",
      medicine: [
        "shit",
        "dog shit"
      ]
    }
  }
  updateADesease() {

  }
  deleteADesease() {

  }
}
