import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackendHomeComponent } from './backend-home/backend-home.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BackendHomeComponent,
    TeamManagementComponent,
    BlogManagementComponent,
    PdfGeneratorComponent,
    RouterModule.forChild([
      { path: '', component: BackendHomeComponent },
      { path: 'team-management', component: TeamManagementComponent },
      { path: 'pdf-generator', component: PdfGeneratorComponent },
      { path: 'blog-management', component: BlogManagementComponent },
    ]),
  ],
})
export class BackendPortalModule {}
