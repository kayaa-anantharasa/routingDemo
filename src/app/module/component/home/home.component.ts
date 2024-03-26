import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  items: FormArray;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([])
    })
  }

  ngOnInit() {
  }
  addItems() {
    console.log("Add", this.form.value)
    const add = this.form.get('items') as FormArray;
    add.push(this.fb.group({
      state: [],
      city: [],
      country: [],
    }))
  }
  remove(index) {
    const remove = this.form.get('items') as FormArray;
    remove.removeAt(index);
  }
}
