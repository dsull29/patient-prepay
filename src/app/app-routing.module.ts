import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { InsuranceEligibilityComponent } from './insurance-eligibility/insurance-eligibility.component';
import { DiscountsAndAdjustmentsComponent } from './discounts-and-adjustments/discounts-and-adjustments.component';
import { PaymentComponent } from './payment/payment.component';
import { TextFileViewerComponent } from './text-file-viewer/text-file-viewer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'insurance-eligibility', component: InsuranceEligibilityComponent },
  { path: 'discounts-and-adjustments', component: DiscountsAndAdjustmentsComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'transcript', component: TextFileViewerComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }