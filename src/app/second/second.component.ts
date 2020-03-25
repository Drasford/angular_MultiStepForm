import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {UserDataService} from './../services/user-data.service';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  Step2: FormGroup;
  userMovies: FormGroup;
  constructor(private formBuilder: FormBuilder, private userData: UserDataService) { }

  ngOnInit(): void {
    this.Step2 = this.formBuilder.group({
      movies:this.formBuilder.array([])
    });
    this.Step2.setControl('movies',this.setExistingMovies(this.userData.user.Movies))
  }

  setExistingMovies(movies: Movie[]):FormArray{
      const formArray = new FormArray([]);
      movies.forEach(movie => {
        formArray.push(this.formBuilder.group({
          name:[movie.name,Validators.required],
          posterLink:[movie.posterLink]
        }));
      });
      return formArray
  }

  get movies(){
    return this.Step2.get('movies') as FormArray;
  }

  removeMovie(index){
    this.movies.removeAt(index);
  }

  addMovieField(){
    this.movies.push(this.formBuilder.group({
      name: ['', Validators.required],
      posterLink: ['']
    }))
  }

  submitForm2(){
    this.userData.AddStep2(this.Step2.value);
    console.log("fired");
    this.userData.submitForm();
  }
 
}
