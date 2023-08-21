import { Component, EventEmitter, Output } from '@angular/core';
import { AppRoute } from 'src/@const/app-route';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  appRoute = AppRoute;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
