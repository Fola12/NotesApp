import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  constructor(private httpClient: HttpClient) { }

  db= 'http://localhost:3000/database';
  getNotes(){
    return this.httpClient.get('http://localhost:3000/database');
  }

  postNotes(data){
    return this.httpClient.post('http://localhost:3000/database', data);
  }

  deleteNote(id){
    console.log(id);
    //return this.httpClient.delete('http://localhost:3000/database/' + id);

    this.httpClient.delete('http://localhost:3000/database/' + id).subscribe(data => {
      console.log(data);
    });
  }
}
