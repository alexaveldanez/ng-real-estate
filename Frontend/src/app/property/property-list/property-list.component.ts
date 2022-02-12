import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealEstateService } from 'src/app/services/real-estate.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;

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
        console.log(error);
      }
    )

  }

}
