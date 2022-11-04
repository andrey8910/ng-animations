import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-message',
  animations: [
    trigger('openCloseMessage',[
      state('open', style({
        color: 'red'
      })),
      state('closed', style({
      })),
      transition('* => closed', [
        //animate('900ms ease-in-out'),
         style({opacity: 1 ,  color: 'green'}),
         animate('700ms ease-in-out', style({opacity: 0}))
      ]),
      transition('* => open', [
         style({
           opacity: 0,
           transform: 'scale(.2)'

         }),
         animate('900ms ease-in-out', style({
           opacity: 1,
           transform: 'scale(1.2)'
         }))
      ])
    ])
  ],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message : string;
  @Input() isShowMessage: boolean;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  closeModal(){
    this.isShowMessage = false;
    setTimeout(()=>{
      this.close.emit()
    },700)

  }

}
