import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'lazymodule', loadChildren: './lazymodule/lazymodule.module#LazymoduleModule' } // LoadChildren property is added in application
];                                                                                         // Takes path to module
                                                                                          // # appends class name

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
