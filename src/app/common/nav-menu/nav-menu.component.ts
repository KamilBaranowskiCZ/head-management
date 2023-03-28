import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuItem, NavMenuService } from './nav-menu.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  open = true;
  menuItems!: MenuItem[];
  selectedMenuITem!: MenuItem;

  constructor(
    private menuItemsService: NavMenuService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getMenuItems();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        console.log((event as any).url)
      });
  }


  private selectCurrentMenuItem(url: string) {

  }

  private getMenuItems() {
    this.menuItems = this.menuItemsService.getMenuItems();
  }

}
