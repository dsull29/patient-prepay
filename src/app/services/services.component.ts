import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Service {
  department: string;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  selectedServices: Service[] = [];
  hasSelection = false;
  departments: string[] = [];
  selectedDepartment = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.selectedServices = [];
    this.http.get<Service[]>('assets/services.json').subscribe(
      services => {
        this.services = services;
        this.departments = [...new Set(this.services.map(service => service.department))];
      },
      error => console.log(error)
    );
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

    this.hasSelection = this.selectedServices.length > 0;
  }

  isSelected(service: Service): boolean {
    return this.selectedServices.findIndex(s => s.name === service.name) !== -1;
  }

  getCost() {
    let totalCost = 0;
    for (const service of this.selectedServices) {
      totalCost += service.price;
    }
    this.router.navigate(['/insurance-eligibility'], { state: { services: this.selectedServices, cost: totalCost } });
  }
}
