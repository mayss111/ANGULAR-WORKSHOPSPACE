import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },

  { path: 'list', component: ListEventComponent},
    
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
