import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const userRoutes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule {}
