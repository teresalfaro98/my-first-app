//  Angular imports
import { Component, OnInit } from '@angular/core';

import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';
import { SidebarService } from './services/core/sidebar.service';

declare var App: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private menuSvc:MainTopBarMenuService, private sidebarSvc: SidebarService){

  }

  title = 'my-first-app';
  miEmpresa: string ="Grupo Flecha Amarilla";
  periodo: number = 2020;

  menuItems:any[] = [];
  sidebarItems: any[] = [];

  ngOnInit() {
    //Load Sidebar Script
    App.init()
    //Load Data
    this.getData();
  }

  getData(){
    this.menuSvc.getItemsMenu().subscribe((data:any) =>{
      this.menuItems = data;
    });
    this.sidebarSvc.getItemsSideBar().subscribe((data:any)=>{
      this.sidebarItems = data;
    });
  }

  listenChildMenuEvent(eventArgs:any){
    console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('El indice en el papá es: ', eventArgs.index);
    console.log('El item en el papá es: ', eventArgs.name);
  }
}
