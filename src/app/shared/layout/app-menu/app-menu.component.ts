import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/app-layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: '',
        items: [
          { label: 'Início', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          {
            label: 'Usuários',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/uikit/formlayout'],
          },
          {
            label: 'Pacientes',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/uikit/input'],
          },
          {
            label: 'Departamentos',
            icon: 'pi pi-fw pi-building',
            routerLink: ['/uikit/floatlabel'],
          },
          {
            label: 'Precauções',
            icon: 'pi pi-fw pi-flag',
            routerLink: ['/uikit/invalidstate'],
          },
          {
            label: 'Checklists',
            icon: 'pi pi-fw pi-check-square',
            items: [
              {
                label: 'Incidentes',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/auth/login'],
              },
              {
                label: 'Procedimentos',
                icon: 'pi pi-fw pi-check',
                routerLink: ['/auth/error'],
              },
              {
                label: 'Fatores de Risco',
                icon: 'pi pi-fw pi-exclamation-triangle',
                routerLink: ['/auth/access'],
              },
            ],
          },
        ],
      },
    ];
  }
}
