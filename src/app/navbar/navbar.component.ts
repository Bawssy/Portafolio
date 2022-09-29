import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  items: MenuItem[] = [];
  ngOnInit(): void {

    this.items = [
      {
        label: 'Archivo',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Guardado',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Eliminar',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Exportar',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Izquierda',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Derecha',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Centro',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justificado',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Eliminar',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Buscar',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filtro',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Imprimir',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'Lista'
              }
            ]
          }
        ]
      },
      {
        label: 'Eventos',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Editar',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Guardar',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archivar',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remover',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
console.log("Hola Tommy")
  }
}
