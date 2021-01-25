import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//引入需要路由的部件（COMPONENT）中的CLASS
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleCreateComponent } from './components/people-create/people-create.component';

const routes: Routes = [
  //Path定义访问路径,Component定义来自哪个部件
  { path: '', redirectTo: 'products', pathMatch: 'full' },//重定向不带路径到localhost:4200/peoples
  { path: 'peoples', component: PeopleListComponent },//localhost:4200/peoples
  { path: 'peoples/:id', component: PeopleDetailsComponent },//localhost:4200/people/123
  { path: 'create', component: PeopleCreateComponent }  //localhost:4200/create
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
