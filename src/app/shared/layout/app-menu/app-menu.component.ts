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
            routerLink: ['/users/'],
          },
          {
            label: 'Pacientes',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/patients/'],
          },
          {
            label: 'Departamentos',
            icon: 'pi pi-fw pi-building',
            routerLink: ['/departments/'],
          },
          {
            label: 'Precauções',
            icon: 'pi pi-fw pi-flag',
            routerLink: ['/precautions/'],
          },
          {
            label: 'Checklists',
            icon: 'pi pi-fw pi-check-square',
            items: [
              {
                label: 'Incidentes',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/checklists/incidents'],
              },
              {
                label: 'Procedimentos',
                icon: 'pi pi-fw pi-check',
                routerLink: ['/checklists/procedures'],
              },
              {
                label: 'Fatores de Risco',
                icon: 'pi pi-fw pi-exclamation-triangle',
                routerLink: ['/checklists/risk-factors'],
              },
            ],
          },
        ],
      },
    ];
  }
}
