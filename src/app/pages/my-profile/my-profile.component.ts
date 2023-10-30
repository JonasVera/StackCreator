import {Component} from '@angular/core';

@Component({
  selector: 'sc-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  tabActive = {
    label: 'Configuracoes', active: true
  }

  tabStates = [
    {label: 'Perfil', active: true},
    {label: 'Atividade', active: false},
    {label: 'Salvos', active: false},
    {label: 'Configuracoes', active: false}
  ];

  toTab(tabName: string) {
    this.tabStates.forEach(tab => {
      if (tabName !== tab.label)
        tab.active = false;
      else {
        tab.active = true;
        this.tabActive.label = tab.label;
      }

    });
  }

}
