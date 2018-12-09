import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	@Input() details;
  tmpModel:number = 0;
	@Output() closeModal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  	console.log(this.details)
    this.tmpModel = 1;
  }
  goCloseModal(){
  	this.closeModal.emit(false);
  }

}
