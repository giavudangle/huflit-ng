import { Component } from '@angular/core';
import { ActiveService } from './active.service';
import { InactiveService } from './inactive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(
    private _inactiveService: InactiveService,
    private _activeService: ActiveService
  ) {}

  onSetToActive(id: number) {
    this._activeService.onSetToActive(this.activeUsers, this.inactiveUsers, id);
  }

  onSetToInactive(id: number) {
    this._inactiveService.onSetToInactive(
      this.inactiveUsers,
      this.activeUsers,
      id
    );
  }
}
