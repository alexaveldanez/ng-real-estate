import { Component, OnInit } from '@angular/core';

import { RealEstateService } from 'src/app/services/real-estate.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstateService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )

  }

}
