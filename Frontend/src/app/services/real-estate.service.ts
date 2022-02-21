import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { IPropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  constructor(private http:HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        // throw new Error('some error');
        return propertiesArray.find(p => p.Id === id);
      })
    )
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
      const propertiesArray: Array<Property> = [];
      const localProperties = JSON.parse(localStorage.getItem('newProp'));

      if (localProperties) {
        for (const id in localProperties) {
          if (SellRent) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
        } else {
          propertiesArray.push(localProperties[id]);
        }
        }
      }

      for (const id in data) {
        if (SellRent) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
          } else {
            propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    );
  }


  addProperty(property: Property) {
    let newProp = [property]

    if(localStorage.getItem('newProp')) {
      newProp = [...JSON.parse(localStorage.getItem('newProp')), property]
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
