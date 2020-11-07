import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes = [];
  form: FormGroup;

  create: Boolean = false;

  constructor(private noteService: NotesService,
              private fb: FormBuilder,
              private modalService: NgbModal)
               { 
          let ids = new Date().getTime();
          this.form = this.fb.group({
            time: ids,
            title: [''],
            content: ['']
          })
  }

  ngOnInit(): void {
  
    this.getNote();
    
  }

  getNote(){
    this.noteService.getNotes().subscribe((data: any[])=>{  
      this.notes = data;  
    });
  }
  _Toggle(e) {
   
    e.preventDefault();
    this.create = !this.create;
  }
 
  deleteNote(e) {
   this.noteService.deleteNote(e.id);
   this.getNote();
   console.log('hi');
     
  }

     
  submitForm() {
    var formObj = this.form.value
    
    
  this.noteService.postNotes(formObj).subscribe(
    
    (response) => console.log(response),
    (error) => console.log(error),
  )
      this.getNote();
      this.form.reset();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
