import { Injectable } from '@angular/core';
import { InactiveService } from './inactive.service';

@Injectable({
  providedIn: 'root',
})
export class ActiveService {
  onSetToActive(activeUsers: string[], inactiveUsers: string[], id: number) {
    activeUsers.push(inactiveUsers[id]);

    inactiveUsers.splice(id, 1);
  }
}
