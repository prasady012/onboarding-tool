import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class  SearchEmployeePipe implements PipeTransform {

  transform(value: any, name: string) : any[] {
    if(!value || !name){
      return value
    }
    else {
      return value.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    }
  }

}
