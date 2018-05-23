import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes)],
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class RoutesModule {}
