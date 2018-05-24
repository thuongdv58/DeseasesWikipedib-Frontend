import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DeseasesService } from "../deseases/deseases.service";

@Component({
  selector: 'app-desease-detail',
  templateUrl: './desease-detail.component.html',
  styleUrls: ['./desease-detail.component.css']
})
export class DeseaseDetailComponent implements OnInit {

  // @Input() desease: any;
  desease: any;
  deseaseId: any;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private deseasesService: DeseasesService) {
  }

  ngOnInit() {
    this.desease = this.deseasesService.getDeseaseDetail(this.activateRoute.params["id"])
      this.activateRoute.queryParams.subscribe(queries => {
    });
  }

  deleteCurrent(){
    this.deseasesService.deleteADesease(this.desease.id);
    // redirect to another route
    this.router.navigate(['/deseases']);
  }
  modifyCurrent(){
    //
  }
}
