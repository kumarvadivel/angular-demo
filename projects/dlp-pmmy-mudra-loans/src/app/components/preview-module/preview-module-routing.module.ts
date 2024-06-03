import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyPreviewComponent } from './components/journey-preview/journey-preview.component';

const routes: Routes = [
  {
    path:"preview-page",
    component: JourneyPreviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewModuleRoutingModule { }
