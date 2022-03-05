import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit() {
  }
  
  Tabuada(){
    return[

      5*1, 5*2, 5*3, 5*4, 5*5, 5*6, 5*7, 5*8, 5*9, 5*10
];
  
  }
  
}




/*
let n = 5;
for (let x = 1; x<=10; x++) {
      n = Math.floor((5 * 10) + 1);
      this.lista.push(n);     
}
 
return this.lista;
*/