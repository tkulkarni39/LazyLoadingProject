import { Injectable } from '@angular/core';
import { LazymoduleModule } from './lazymodule/lazymodule.module';
import { AppModule } from './app.module';

@Injectable()
export class ModuleLevelService {

  constructor() { }

  value = 'This is module level injection';

  public getValue() {
    return this.value;
  }
}
