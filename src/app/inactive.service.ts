import { Injectable } from '@angular/core';
import { ActiveService } from './active.service';

@Injectable({
  providedIn: 'root',
})
export class InactiveService {
  onSetToInactive(inactiveUsers: string[], activeUsers: string[], id: number) {
    inactiveUsers.push(activeUsers[id]);

    activeUsers.splice(id, 1);
  }
}
