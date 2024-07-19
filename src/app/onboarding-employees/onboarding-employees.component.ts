import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-employees',
  templateUrl: './onboarding-employees.component.html',
  styleUrls: ['./onboarding-employees.component.css']
})
export class OnboardingEmployeesComponent implements OnInit {

  public searchEmp : string = '';

  public employeeData = [
    {
      "name": "Cody Fisher",
      "id": "GADS01",
      "type": "New Employee",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "10/6/13",
      "unit": "UIROLL Oy",
      "hiringManager": "Leslie Alexander",
      "isChecked": false
    },

    {
      "name": "Darrel Steward",
      "id": "GADS02",
      "type": "External",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "4/4/18",
      "unit": "UIROLL Infra",
      "hiringManager": "Darlene Robertson",
      "isChecked": false
    },

    {
      "name": "Brooklyn Simmens",
      "id": "GADS03",
      "type": "New Employee",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "5/7/16",
      "unit": "UIROLL Rental",
      "hiringManager": "Jerome Bell",
      "isChecked": false
    },

    {
      "name": "Wode Warren",
      "id": "GADS04",
      "type": "Transitioning",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "4/21/12",
      "unit": "UIROLL Oy",
      "hiringManager": "Theresa Web",
      "isChecked": false
    },

    {
      "name": "Jacob Jones",
      "id": "GADS05",
      "type": "Returning",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "1/15/12",
      "unit": "UIROLL CDF",
      "hiringManager": "Cody Fisher",
      "isChecked": false
    },

    {
      "name": "Darrel Steward",
      "id": "GADS06",
      "type": "Transitioning",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "4/4/18",
      "unit": "UIROLL Infra",
      "hiringManager": "Darlene Robertson",
      "isChecked": false
    },

    {
      "name": "Brooklyn Simmens",
      "id": "GADS07",
      "type": "Returning",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "5/7/16",
      "unit": "UIROLL Rental",
      "hiringManager": "Jerome Bell",
      "isChecked": false
    },

    {
      "name": "John Smith",
      "id": "GADS08",
      "type": "External",
      "progress": "1/5",
      "status": "In-Progress",
      "startDate": "5/7/16",
      "unit": "UIROLL Rental",
      "hiringManager": "Jerome Bell",
      "isChecked": false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  checkAllButton: any = "";
  data = this.employeeData;

  changeTab(type: any) {
    if (type == "all") {
      this.employeeData = this.data;
    } else {
      this.employeeData = this.data.filter((item: any) => { if (item.type == type) return item })
    }
  }

  checkAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.employeeData.forEach((item: any) => {
      item.isChecked = isChecked;
    });
  }

}
