import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '', 
    component: CollectionsHomeComponent,
    // sub component for Colln home comp
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: BiographyComponent },
      { path: 'partners', component: PartnersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
