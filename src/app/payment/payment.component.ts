import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  patientResponsibility: number = 0;
  hasInsurance: boolean = false;
  insuranceEligible: boolean = false;
  payInFull: boolean = true;
  paymentPlan: boolean = false;
  paymentOptions: string[] = ["Pay Now", "Create Payment Plan"];
  paymentOption: string = "Pay Now";
  paymentTerms: number[] = [6, 12, 18, 24, 36, 48];
  paymentTerm: number = 6;
  amountDue: number = 0;
  monthlyDue: number = 0;
  monthlyPayment: number = 0;
  amountDuePayNow: number = 0;
  amountDuePaymentPlan: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = history.state;
    this.patientResponsibility = state.patientResponsibility;
    this.hasInsurance = state.hasInsurance;
    this.insuranceEligible = state.insuranceEligible;
    if (this.hasInsurance && this.insuranceEligible) {
      this.amountDue = this.patientResponsibility;
    } else if (!this.hasInsurance && this.payInFull) {
      this.amountDue = this.patientResponsibility * 0.5;
    } else if (!this.hasInsurance && this.paymentPlan) {
      this.amountDue = this.patientResponsibility * 0.7;
    }
    this.amountDuePayNow = this.amountDue;
    this.amountDuePaymentPlan = this.amountDue / this.paymentTerm
  }

  onSelectTerms(terms: number) {
    console.log('terms', terms)
    this.paymentTerm = terms;
    this.amountDuePaymentPlan = this.amountDue / this.paymentTerm
    
  }

  onPayNow() {
    this.amountDue = this.patientResponsibility * 0.5;
    alert('Thank you for your payment!');
  }

  onCreatePlan() {
    alert('Your payment plan has been created!');
  }

  onSubmit() {
    if (this.paymentOption === 'Pay Now') {
      this.onPayNow();
    } else {
      this.onCreatePlan();
    }
  }
}