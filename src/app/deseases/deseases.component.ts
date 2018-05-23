import { Component, OnInit } from '@angular/core';
import { DeseasesService} from './deseases.service';

@Component({
  selector: 'app-deseases',
  templateUrl: './deseases.component.html',
  styleUrls: ['./deseases.component.css']
})
export class DeseasesComponent implements OnInit {

  deseases: any;

  selectedDesease: any;
  constructor(private deseaseService: DeseasesService) {
  }

  ngOnInit() {
    this.deseases = this.deseaseService.getDeseaseList(1);
  }

  public onSelect(data){
    this.selectedDesease = data;
  }
}
