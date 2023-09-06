import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';

const routes: Routes = [
  {path:'',component:ListLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
