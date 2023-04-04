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
