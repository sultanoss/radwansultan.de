import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlidshowComponent } from './slidshow/slidshow.component';

const routes: Routes = [
  { path: '', component: SlidshowComponent},
  { path: 'imprint', component:ImprintComponent},
  { path: 'data-protection', component:DataProtectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
