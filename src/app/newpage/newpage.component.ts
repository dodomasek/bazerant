import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  // ....funkcia ktora nezobrazuje okno (pole)
  private shown: boolean = false;

  //toto umoznuje edit description pouzitej v newpage
  @Input() description: string;
  @Input() link: string;
  @Input() butonz: boolean = true;


  constructor() {
  }

  ngOnInit() {
  }

  // po kliknuti na button shown = negacia shown zobrazi a schova sa...
  onDivClick() {
    this.shown = !this.shown;
  }

// div v pozadi, kliknutim niekam inam okno schova...
  closeImagePreview() {
    console.log('yoloswag');
    this.shown = false;
  }
}

