import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Service {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    { name: 'Service 1', price: 100, description: 'Brain Removal' },
    { name: 'Service 2', price: 200, description: 'Ankle Rotation' },
    { name: 'Service 3', price: 300, description: 'Face Improvements'}
  ];

  selectedServices: Service[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedServices = [];
  }
  
  selectService(service: Service) {
    const index = this.selectedServices.findIndex(s => s.name === service.name);
    if (index !== -1) {
      // If the service is already selected, remove it from the selectedServices array
      this.selectedServices.splice(index, 1);
    } else {
      // If the service is not already selected, add it to the selectedServices array
      this.selectedServices.push(service);
    }
  }

  isSelected(service: Service): boolean {
    return this.selectedServices.findIndex(s => s.name === service.name) !== -1;
  }

  getCost() {
    let totalCost = 0;
    console.log("Services:",this.selectedServices)
    for (const service of this.selectedServices) {
      totalCost += service.price;
    }
    console.log('Total cost:', totalCost);
    this.router.navigate(['/insurance-eligibility'], { state: { services: this.selectedServices, cost: totalCost } });
  }
}

