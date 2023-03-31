import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {

  @Input() options: { term: number, discount: number }[] = [];
  @Output() optionSelected = new EventEmitter<{ term: number, monthlyPayment: number }>();
  
  patientResponsibility: number = 0;
  selectedTerm: number = 0;
  paymentTerms: { term: number, discount: number, selected: boolean, monthlyPayment: number, totalPayment: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedTerm = this.options[0].term;
    this.patientResponsibility = history.state.patientResponsibility;

    // set this.paymentTerms to this.options and then add two new property to each option called selected and monthlyPayment
    // set the selected property to false and the monthlyPayment to the result of the following formula:
    // (this.patientResponsibility * (1 - option.discount)) / option.term
    // this will give you the monthly payment for each option
    // the selected property will be used to determine which option is selected
    // the monthlyPayment property will be used to display the monthly payment for each option
    // the first option should be selected by default
    // when an option is selected, emit the term to the parent component

    this.paymentTerms = this.options.map(option => {
      return {
        ...option,
        selected: false,
        monthlyPayment: (this.patientResponsibility * (1 - option.discount)) / option.term,
        totalPayment: this.patientResponsibility * (1 - option.discount)
      }
    });
   

  }

  selectTerm(term: number, monthlyPayment: number) {
    this.selectedTerm = term;
    this.paymentTerms.forEach(option => {
      option.selected = option.term === term;
    });
    this.optionSelected.emit({ term: term, monthlyPayment: monthlyPayment });
  }


}
