import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { DataService } from "../../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  currentTheme = "default";

  //Prueba-Cambio de Theme
  lightTheme = false;

  getInputType() {
    if (this.lightTheme) 
    {
      this.changeTheme('default');
    }
    else
    {
      this.changeTheme('dark');
    }
  }

  toggleTheme() {
    this.lightTheme = !this.lightTheme;
    this.getInputType();
  }

  userMenu = [
    { title: "Cuenta", link: "/cuenta" },
    { title: "Cerrar sesión", link: "login" },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private dataService: DataService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.toggleTheme();

    this.dataService
      .getMe()
      .toPromise()
      .then((resp) => {
        this.user = resp["data"]["data"];
      })
      .catch((err) => {
        if (err.status == 401) this.router.navigate(["/login"]);
        console.log(err);
      });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );


    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.router.navigate(["/inicio"]);
    return false;
  }
}
