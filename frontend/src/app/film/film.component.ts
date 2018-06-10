import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: any;
  constructor(private  http: HttpClient) { }

  ngOnInit() {
     this.http.get('http://localhost:8000/api/films').subscribe(
      data => this.films = data,
      error => console.log(error),
    );
  }

}
