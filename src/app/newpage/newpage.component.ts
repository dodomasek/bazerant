import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
