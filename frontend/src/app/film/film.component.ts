import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: any;
  selectedFile: File= null;
  constructor(private  http: HttpClient) { }

  ngOnInit() {
     this.http.get('http://localhost:8000/api/films').subscribe(
      response => this.films = response,
      error => console.log(error),
    );
  }
  editFilm(film){

  }
  updateFilm(film){
    console.log(film);
      // const fd = new FormData();
      // fd.append('name', film.name);
      // fd.append('description', film.description);
      // fd.append('releaseDate', film.release);
      
      // fd.append('photo', this.selectedFile, this.selectedFile.name);
    
      // return this.http.post('http://localhost:8000/api/film', fd).subscribe(
      //   data => console.log(data),
      //   error => console.log(error),
      // );
  }
  deleteFilm(){

  }

}
