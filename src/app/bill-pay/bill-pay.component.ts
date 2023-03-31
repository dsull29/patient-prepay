import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-pay',
  templateUrl: './bill-pay.component.html',
  styleUrls: ['./bill-pay.component.css']
})
export class BillPayComponent {
  patientResponsibility: number =0 ;

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/payment'], { state: { patientResponsibility: this.patientResponsibility } });
  }
}
