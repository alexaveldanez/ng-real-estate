import { Injectable } from '@angular/core';

import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message) {
  alertify.success(message);
}

error(message) {
  alertify.error(message);
}

}
