import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {
  // inputs sao como as props do React, onde passamos propriedades para o componente filho
  // dentro do parenteses é o ALIAS do nome para acessar essa propriedade
  @Input('my-prop') myProp: string = '';
  @Input('') myProp2: string = ''; // sem o ALIAS, é preciso acessar como "myProp2"

  @Output() myEvent = new EventEmitter<string>(); //event emitter avisam ao pai que algo foi mudado

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.myEvent.emit('chamada feita do componente filho');
  }
}
