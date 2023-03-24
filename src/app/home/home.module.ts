import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
