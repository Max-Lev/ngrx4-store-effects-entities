import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { MatChipInputEvent, MatChipSelectionChange, MatChipList } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-input-options-container',
  templateUrl: './input-options-container.component.html',
  styleUrls: ['./input-options-container.component.scss']
})
export class InputOptionsContainerComponent implements OnInit, AfterViewInit {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  options: any = [];

  // @Output() selectionChange: EventEmitter<MatChipSelectionChange>;

  @ViewChild('chipList') chipList: MatChipList;

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.http.get(environment.optionsURL).subscribe((list: any) => {
      console.log(list);
      this.options = list;
    });
  };

  ngAfterViewInit(): void {
    // console.log(this.chipList);
    this.chipList.stateChanges.subscribe((data) => {
      console.log(data)
      console.log(this.chipList.selected)
    })

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      this.options.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.options.indexOf(fruit);
    if (index >= 0) {
      this.options.splice(index, 1);
    }
  };

  select(option) {
    debugger;
  }

  s($event) {
    debugger;
  }


}
