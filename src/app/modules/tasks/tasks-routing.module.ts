import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TaskPageComponent} from './pages/task-page/task-page.component';

const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
