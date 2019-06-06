import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [

    trigger('modal-container-fade-animations', [

      state(
        'criado', 
        style({ opacity: 1 })
      ),
      transition(
        'void => criado', 
        [
          style({ opacity: 0 }),
          animate('0.5s ease-in-out')
        ]
      ),

      state(
        'removido',
        style({ opacity: 0 })
      ),
      transition(
        'criado => removido',
        [ animate('0.5s ease-in-out') ]
      )

    ]),


    // trigger('modal-transform-animations', [
      
    //   state(
    //     'criado', 
    //     style({ opacity: 0 })
    //   ),
    //   transition(
    //     'void => criado', 
    //     [
    //       style({ opacity: 1 }),
    //       animate('0.5s 0.5s ease-in-out')
    //     ]
    //   ),
    // ])

  ]

})
export class ModalComponent {

  constructor() { }

  @Input() modalData: object
  @Output() closeModalEvent = new EventEmitter();

  public modalContainerState: string = 'criado'
  // public modalState: string = 'criado'

  public closeModal() {
    this.modalContainerState = 'removido'
  }

  public dismissModal(event) {
    if (event.toState === 'removido') {
      this.closeModalEvent.emit()
    }
  }

  public stopPropagation(event: Event) {
    event.stopImmediatePropagation()
  }
}
