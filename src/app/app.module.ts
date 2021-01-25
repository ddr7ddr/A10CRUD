import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleCreateComponent } from './components/people-create/people-create.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

import { FormsModule } from '@angular/forms'; //这个必须不要忘了
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//通过ANGULAR MATERIAL CDK命令自动装载进来的UI组件
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NevigationComponent } from './nevigation/nevigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
//-------------------------
import { MatListModule } from '@angular/material/list';
import { DepartmentComponent } from './department/department.component'; //只要与API对接都要这个

@NgModule({
  declarations: [
    AppComponent, //系统默认的
    PeopleCreateComponent, //包含所有的部件(components)
    PeopleDetailsComponent,
    PeopleListComponent,
    DashboardComponent,
    NevigationComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule, //系统默认
    AppRoutingModule, //建立新项目时，只要添加了，系统默认
    FormsModule, //如果上面引入了，这里一定要申明一下
    HttpClientModule, 
    BrowserAnimationsModule, MatGridListModule, MatCardModule, 
    MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, 
    MatToolbarModule, MatSidenavModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
