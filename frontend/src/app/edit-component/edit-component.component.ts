import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  public selectedFile: File = null;
  public form = {
    name: null,
    description: null,
    releaseDate: null,
    photo: File = null,
  };
  model;
  releaseDate = {year: 2018, month: 6, day: 1};
 
  constructor(private  http: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event){
   this.selectedFile = <File> event.target.files[0];
   
  }

  onSubmit(updateForm){

    const releaseDate = createForm.value.releaseDate.year + "-"+ createForm.value.releaseDate.month + "-" + createForm.value.releaseDate.day;
    console.log(releaseDate);
    const fd = new FormData();
    fd.append('name', updateForm.value.name);
    fd.append('description', updateForm.value.description);
    fd.append('releaseDate', releaseDate);
    
    fd.append('photo', this.selectedFile, this.selectedFile.name);
   
    return this.http.put('http://localhost:8000/api/films', fd).subscribe(
      data => console.log(data),
      error => console.log(error),
    );
  }

  test(){
    // const date = this.releaseDate.year + "-"+ this.releaseDate.month + "-" + this.releaseDate.day;
    // const testDate = new Date(date);
    // console.log(testDate); // Thu Jan 26 2017 ...
  }

}
