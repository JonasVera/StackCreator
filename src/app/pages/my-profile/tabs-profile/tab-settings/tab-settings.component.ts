import {Component} from '@angular/core';

@Component({
  selector: 'sc-tab-settings',
  templateUrl: './tab-settings.component.html',
  styleUrls: ['./tab-settings.component.scss']
})
export class TabSettingsComponent {

  menuSection = {
    label: 'Editar Perfil', active: true
  }

  menuSections = [
    {
      category: "INFORMACOES PESSOAIS",
      items: [
        {label: "Editar Perfil", active: true},
        {label: "Excluir Perfil", active: false}
      ]
    },
    {
      category: "CONFIGURACOES DO SITE",
      items: [
        {label: "Preferencias", active: false}
      ]
    }
  ];

  toggleItemActivation(category: string, label: string) {
    this.menuSections.forEach(cat => {
      cat.items.forEach(item => {
        if (cat.category === category && item.label === label) {
          item.active = true;
          this.menuSection.label = item.label;
        } else {
          item.active = false;
        }
      });
    });
  }

}
