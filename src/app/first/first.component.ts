import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { ZipValidator } from '../validator/zip-validator.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userData: UserDataService, private router: Router) { }

  step1: FormGroup;


  ngOnInit(): void {
    this.step1 = this.formBuilder.group({
      firstName:[this.userData.getUser().firstName,Validators.required],
      lastName:[this.userData.getUser().lastName, Validators.required],
      zipCode:[this.userData.getUser().zipCode, ZipValidator],
    });
  }

  

  submitForm(){
    this.userData.AddStep1(this.step1.value);
    this.router.navigate(['/step2']);
  }

 
}
