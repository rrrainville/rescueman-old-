import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CheckboxItem } from '../models/checkbox-item';

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit, OnChanges {

  @Input() options = Array<CheckboxItem>();
  @Input() selectedValues: string[];
  @Output() toggle = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.selectedValues) {
      this.selectedValues.forEach(value => {
        const element = this.options.find(x => x.value === value);
        if (element) {
          element.checked = true;
        }
      });
    }
  }

  onToggle() {
    const checkedOptions = this.options.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => x.value);

    this.toggle.emit(checkedOptions.map(x => x.value));
   }
}
