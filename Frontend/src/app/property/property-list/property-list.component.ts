import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealEstateService } from 'src/app/services/real-estate.service';
import { IProperty } from 'src/app/model/iproperty';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IPropertyBase[];

  constructor(private route: ActivatedRoute, private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.realEstateService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('http error:')
        console.log(error);
      }
    )

  }

}
