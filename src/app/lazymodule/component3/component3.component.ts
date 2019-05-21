import { Component, OnInit } from '@angular/core';
import { ModuleLevelService } from 'src/app/module-level.service';
import { LazymoduleModule } from '../lazymodule.module';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
  // providers: [LazymoduleModule]


})
export class Component3Component implements OnInit {

  constructor() { }

   ngOnInit() {

  }

  // public dependency() {
  //   return this.service.getValue();
  // }

}
