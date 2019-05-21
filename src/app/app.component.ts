// Lazy loading - Allows application to load modules only when they are needed
// Improves performance - initial loading time of webpage reduces



import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyLoadingProject';

  constructor(private route: ActivatedRoute, private router: Router) { }

  comp1() {

    this.router.navigate(['lazymodule'], {relativeTo: this.route});

  }

  comp2() {

    this.router.navigate(['lazymodule/component2'], {relativeTo: this.route});

  }

  comp3() {

    this.router.navigate(['lazymodule/component3'], {relativeTo: this.route});

  }
}
