import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Cuenta', url: 'cuenta', icon: 'person' },
    { title: 'Noticias', url: 'notica', icon: 'newspaper' },    
    { title: 'Asistencia', url: 'asistencia', icon: 'calendar' },
    { title: 'Notas', url: 'notas', icon: 'checkbox' },
    { title: 'Contactanos', url: 'contactanos', icon: 'chatbox' },
    { title: 'Registrate', url: 'registro', icon: 'add' },
    { title: 'Login', url: 'login', icon: 'log-in' },

    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
