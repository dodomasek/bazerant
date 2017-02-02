import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  // ....funkcia ktora nezobrazuje okno (pole)
  private shown: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  // po kliknuti na button shown = negacia shown zobrazi a schova sa...
  onButtonClick() {
    this.shown = !this.shown;
  }

  // div v pozadi ktory umoznuje to aby sa pri kliknuti niekam inam okno schovalo...
  somewhereButtonClick() {
    this.shown = false;
  }
}
