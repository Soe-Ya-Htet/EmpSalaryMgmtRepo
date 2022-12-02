import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { StatusCode } from 'status-code-enum';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  message: string;
  isError: boolean;
  isOk: boolean;
  isInfo: boolean;
  @ViewChild("fileInput", {static: false})
  InputVar: ElementRef;

  ngOnInit() {
    this.message = 'Please upload csv file.'
    this.isError = false;
    this.isOk = false;
    this.isInfo = true;
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        const formData = new FormData();

        formData.append("file", file);

        let resp = this.service.upload(formData);

        resp.subscribe( data => {
          this.isOk = true;
          this.isError = false;
          this.isInfo = false;
          this.message = JSON.parse(data.body).message;
          this.InputVar.nativeElement.value = "";
        },(exception: HttpErrorResponse) => {
          this.isOk = false;
          this.isError = true;
          this.isInfo = false;
          this.message = JSON.parse(exception.error).message;
          this.InputVar.nativeElement.value = "";
        }
        );
    }
  }
}
