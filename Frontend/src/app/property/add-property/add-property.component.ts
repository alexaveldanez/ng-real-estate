import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropteryForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form submitted!');
    console.log(this.addPropteryForm)
  }

  selectTab(tabId: number) {
    if (this.formTabs.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
