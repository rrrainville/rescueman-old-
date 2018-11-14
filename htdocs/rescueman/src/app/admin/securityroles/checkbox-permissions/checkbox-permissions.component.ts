import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxPermission } from './checkbox-permission';

@Component({
  selector: 'app-checkbox-permissions',
  templateUrl: './checkbox-permissions.component.html',
  styleUrls: ['./checkbox-permissions.component.scss']
})
export class CheckboxPermissionsComponent implements OnInit {

  @Input() options = Array<CheckboxPermission>();
  @Input() selectedValues: any[];
  @Output() toggle = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    const checkedCreate = this.options.filter(x => x.create);
    const checkedRead = this.options.filter(x => x.read);
    const checkedWrite = this.options.filter(x => x.write);
    const checkedRemove = this.options.filter(x => x.remove);

    // console.log(checkedCreate);

    this.selectedValues = [
      checkedCreate.map(x => x.value),
      checkedRead.map(x => x.value),
      checkedWrite.map(x => x.value),
      checkedRemove.map(x => x.value)
    ];

    this.toggle.emit(this.selectedValues);

    //this.toggle.emit(checkedOptions.map(x => x.value));
   }

   checkAll(event, column) {
    // console.log('checkAll', event, column);

    // debugger;

    const value = event.srcElement.checked;

     this.options.forEach(x => {
        if(column == 'c') x.create = value;
        if(column == 'r') x.read = value;
        if(column == 'w') x.write = value;
        if(column == 'd') x.remove = value;
     });

     this.onToggle();
   }
}
