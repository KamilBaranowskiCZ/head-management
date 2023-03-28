import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavMenuService {
  private menuItems: MenuItem[] = [
    { path: "dashboard", nameKey: "Dashboard" },
    { path: "positions", nameKey: "Positions" },
  ];

  getMenuItems() {
    return this.menuItems;
  }
}

export type MenuItem = {
  path: string,
  nameKey: string,
}
