import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  public data: any;

  constructor(private menuService: MenuService, private router: Router,) {
  }

  ngOnInit(): void {
    this.menu();
  }

  menu() {
    this.menuService.getMenu().subscribe(res => {
      this.data = res;
    });
  }

  logout(link: string):void {
    if (link === '/logout'){
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
