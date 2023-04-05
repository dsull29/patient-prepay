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
  totalCost: number = 0;
  discountsAvailable: boolean = false;
  paidInFullDate: Date = new Date();

  paymentTermOptions = [
    { term: 6, discount: 0.5},
    { term: 12, discount: 0.4},
    { term: 18, discount: 0.3},
    { term: 24, discount: 0.25},
    { term: 36, discount: 0.2}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = history.state;
    this.totalCost = state.cost;
    this.patientResponsibility = state.patientResponsibility;
    this.hasInsurance = state.hasInsurance;
    this.insuranceEligible = state.insuranceEligible;
    if (this.hasInsurance && this.insuranceEligible) {
      this.amountDue = this.patientResponsibility;
      this.discountsAvailable = false;
    } else {
      this.amountDue = this.patientResponsibility;
      this.discountsAvailable = true;
    }

    this.amountDuePayNow = this.amountDue * 0.5;
    this.amountDuePaymentPlan = this.amountDue / this.paymentTerm
  }

  onSelectTerms(option: { term: number, monthlyPayment: number }) {
    this.monthlyPayment = option.monthlyPayment;

    // get the date <ter> number of months from today and set it to the paidInFullDate property
    // use the following code to get the date <term> number of months from today
    // const date = new Date();
    // date.setMonth(date.getMonth() + term);
    // this.paidInFullDate = date;
    const date = new Date();
    date.setMonth(date.getMonth() + option.term);
    this.paidInFullDate = date;
  }

  onPayNow() {
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
