import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-here-details',
  templateUrl: './here-details.component.html',
  styleUrls: ['./here-details.component.css']
})
export class HereDetailsComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
