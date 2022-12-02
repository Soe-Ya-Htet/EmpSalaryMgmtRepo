import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        const formData = new FormData();

        formData.append("file", file);

        let resp = this.service.upload(formData);

        resp.subscribe( data => {
          console.log(data.status);
          console.log(JSON.parse(data.body).message);
        });
    }
  }
}
