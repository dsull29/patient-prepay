import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDepartment'
})
export class FilterByDepartmentPipe implements PipeTransform {
  transform(services: any[], department: string): any[] {
    if (!department || department === 'All Departments') {
      return services;
    } else {
      return services.filter(service => service.department === department);
    }
  }
}
