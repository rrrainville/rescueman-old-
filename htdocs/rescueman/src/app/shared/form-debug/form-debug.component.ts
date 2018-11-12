import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.scss']
})
export class FormDebugComponent implements OnInit {

  @Input() form;

  private showDebug: boolean = false;

  constructor() { }

  ngOnInit() {
    this.showDebug = !environment.production;
  }

}
