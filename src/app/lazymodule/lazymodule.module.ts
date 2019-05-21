import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleLevelService } from '../module-level.service';

const routes: Routes = [
  { path: '', component: Component1Component },
  { path: 'component2', component: Component2Component },
  { path: 'component3', component: Component3Component },
];

@NgModule({
  declarations: [Component1Component, Component2Component, Component3Component],
  imports: [
   // CommonModule,
   // ModuleLevelService,
    RouterModule.forChild(routes),          // We include routes with routerModules forChild() method

  ],
  exports: [
    RouterModule
    ],
    // providers: [ModuleLevelService]
})
export class LazymoduleModule { }
