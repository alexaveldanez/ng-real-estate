import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Property } from 'src/app/model/property';
import { RealEstateService } from 'src/app/services/real-estate.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  constructor(private route: ActivatedRoute, private router: Router, private realEstateService: RealEstateService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.realEstateService.getProperty(this.propertyId).subscribe(
          (data: Property) => {
            this.property = data;
          }
        )
      }
    )
  }

}
