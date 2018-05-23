import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desease-detail',
  templateUrl: './desease-detail.component.html',
  styleUrls: ['./desease-detail.component.css']
})
export class DeseaseDetailComponent implements OnInit {

  @Input() desease: any;
  constructor() { }

  ngOnInit() {
  }

}
