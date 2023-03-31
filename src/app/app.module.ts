import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { InsuranceEligibilityComponent } from './insurance-eligibility/insurance-eligibility.component';
import { DiscountsAndAdjustmentsComponent } from './discounts-and-adjustments/discounts-and-adjustments.component';
import { PaymentComponent } from './payment/payment.component';
import { TextFileViewerComponent } from './text-file-viewer/text-file-viewer.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { RouterModule } from '@angular/router';
import { BillPayComponent } from './bill-pay/bill-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    InsuranceEligibilityComponent,
    DiscountsAndAdjustmentsComponent,
    PaymentComponent,
    TextFileViewerComponent,
    PaymentOptionsComponent,
    BillPayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }