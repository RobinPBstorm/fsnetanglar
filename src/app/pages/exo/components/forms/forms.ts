import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../models/Person';
import { ageMinimum } from '../../validators/age-minimum';
import { minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  Persons: Person[] = [];

  personForm!: FormGroup;
  series!: FormArray;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.series = this._formBuilder.array([]);
    this.addSerie();

    this.personForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, ageMinimum()]],
      series: this.series
    });
  }

  addSerie() {
    this.series.push(
      this._formBuilder.group({
      serie: ['', Validators.required],
      })
    );
  }

  removeSerie(index: number ) {
    this.series.removeAt(index);
  }

  getSeries(): FormGroup[] {
    return this.series.controls as FormGroup[];
  }

  submitForm() {
    if (this.personForm.valid) {
      const series = this.personForm.get('series')!.value.map((value: any) => {
        return value["serie"];
      });

      if (series.length < 3) {
        this.personForm.get('series')!.setErrors({
          minLength: 3
        });
        this.personForm.markAllAsTouched();
        return;
      }

      this.Persons.push(
        new Person(
          this.personForm.get('firstName')!.value,
          this.personForm.get('lastName')!.value,
          this.personForm.get('birthDate')!.value,
          series
        ),
      );
    } else {
      this.personForm.markAllAsTouched();
    }
  }

  protected readonly minLength = minLength;
}
