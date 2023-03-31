import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-eligibility',
  templateUrl: './insurance-eligibility.component.html',
  styleUrls: ['./insurance-eligibility.component.css']
})
export class InsuranceEligibilityComponent implements OnInit {

  hasInsurance = false;
  insuranceName = '';
  errorMessage = '';
  cost: number = 0;
  patientResponsibility = 0;
  insuranceEligible = false;
  loading = false;
  eligibilityChecked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cost = history.state.cost;
    this.patientResponsibility = this.cost;

  }

  onSubmit() {
    if (this.hasInsurance == false) {
      this.router.navigate(['/payment'], { state: { services: history.state.services, cost: history.state.cost, hasInsurance: this.hasInsurance, insuranceName: "SP", insuranceEligible: false, patientResponsibility: this.patientResponsibility } });
    } else if (this.eligibilityChecked) {
      this.router.navigate(['/payment'], { state: { services: history.state.services, cost: history.state.cost, hasInsurance: this.hasInsurance, insuranceName: this.insuranceName, insuranceEligible: this.insuranceEligible, patientResponsibility: this.patientResponsibility } });
    } else {
      // this.errorMessage = 'Please check insurance eligibility first.';
    }
  }

  checkEligibility() {
    this.loading = true;
    this.eligibilityChecked = false;
    setTimeout(() => {
      this.loading = false;
      const hasCoverage = Math.random() < 0.5;

      if (hasCoverage) {
        this.patientResponsibility = 45;
        this.insuranceEligible = true;
      } else {
        this.patientResponsibility = this.cost;
        this.insuranceEligible = false;
      }

      this.eligibilityChecked = true;
    }, 2000);
  }
}
