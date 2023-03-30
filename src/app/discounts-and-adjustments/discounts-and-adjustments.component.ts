import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discounts-and-adjustments',
  templateUrl: './discounts-and-adjustments.component.html',
  styleUrls: ['./discounts-and-adjustments.component.css']
})
export class DiscountsAndAdjustmentsComponent implements OnInit {

  cost = 0;
  hasInsurance = false;
  insuranceName = '';
  patientResponsibility = 0;
  insuranceEligible = false;

  loading = true; // Add a loading indicator

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Get the services and cost from the previous component
    // this.services = history.state.services;
    this.cost = history.state.cost;
    this.hasInsurance = history.state.hasInsurance;
    this.insuranceName = history.state.insuranceName;

    // Show the loading indicator for 2 seconds
    setTimeout(() => {
      this.loading = false;
      this.calculatePatientResponsibility();
    }, 2000);
  }

  calculatePatientResponsibility() {
    // Generate a random boolean to simulate insurance coverage
    const hasCoverage = Math.random() < 0.5;

    if (hasCoverage) {
      this.patientResponsibility = 45;
      this.insuranceEligible = true;
    } else {
      this.patientResponsibility = this.cost;
      this.insuranceEligible = false;
    }
  }

  onContinue() {
    // Navigate to the payment component
    this.router.navigate(['/payment'], { state: { services: history.state.services, cost: this.cost, hasInsurance: this.hasInsurance, insuranceName: this.insuranceName, patientResponsibility: this.patientResponsibility, insuranceEligible: this.insuranceEligible } });
  }

}