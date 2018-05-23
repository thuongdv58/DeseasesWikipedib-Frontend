import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent} from './search/search.component';
import { DeseasesComponent } from './deseases/deseases.component';
import { DeseaseDetailComponent} from './desease-detail/desease-detail.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'deseases', component: DeseasesComponent},
  { path: 'desease-detail', component:  DeseaseDetailComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
