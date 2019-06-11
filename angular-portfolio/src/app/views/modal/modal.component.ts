import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BTMobileDetector } from '../../shared/utils';

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
export class ModalComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() { }


  @Input() modalData: any
  @Input() modalType: string = null

  @Output() closeModalEvent = new EventEmitter();

  public modalContainerState: string = 'criado'

  public closeModal() {
    this.modalContainerState = 'removido'
  }

  public dismissModal(event) {
    if (event.toState === 'removido') {
      this.closeModalEvent.emit()
    }
  }

  public isMobile() {
    return BTMobileDetector.isMobile()
  }

  public stopPropagation(event: Event) {
    event.stopImmediatePropagation()
  }
}
