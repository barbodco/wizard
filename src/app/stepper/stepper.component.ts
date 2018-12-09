import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
declare var console;
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
	@Input() stepDetails;
	@Input() viewMode: boolean = false;
	@Output() activation: EventEmitter<any> = new EventEmitter();
	console = console;
	tmpModel: number = 0;
	modal = false;
	finished: boolean = false;
  constructor() { }

  ngOnInit() {
  	this.activation.emit()
  }
  emitStep(event){
  	this.activation.emit(event)
  }
  // resetForm(data){
  //   data.forEach((v,k) =>{
  //     if(v.value !== ''){
  //       this.checkIfCompleted(true);
  //     }
  //   })
  // }
  checkIfCompleted(specialCase?){
      this.stepDetails.details.forEach((v,k) =>{
        if (v.value === '') {
          this.finished  = false;
        }else{
          this.finished  = true;
          
        }
      })
      if (specialCase) {
        this.stepDetails.details.forEach((v,k) =>{
          if(v.value !== ''){
            this.finished  = true;
          }
        })
      }
  	return this.finished;

  }
  modalMode(){
  	this.modal = true;
  }
}
