import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  @Input() note;
  
  @Output() onDelete = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  

  viewNote: Boolean = false;

  view_note(e) {
    e.preventDefault();
    this.viewNote = !this.viewNote;
  }

  deleteNote(e) {
    
    e.preventDefault();
    this.onDelete.emit(this.note.id);
   
    this.view_note(e);
  }

  doneViewing(){
    this.viewNote = !this.viewNote;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
