import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, Validators,
} from '@angular/forms';
import { ageMinimum } from '../../../validators/age-minimum';
import { Person } from '../../../models/Person';
import { FanService } from '../../../services/fan-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fan-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './fan-edit.html',
  styleUrl: './fan-edit.scss',
})
export class FanEdit {
  fanForm!: FormGroup;
  series!: FormArray;

  index: number | undefined;

  constructor(
    private _service: FanService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.series = this._formBuilder.array([]);
    this.addSerie();

    this.fanForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, ageMinimum()]],
      series: this.series,
    });

    this._activatedRoute.params.subscribe((params) => {
      this.index = params['index'];

      let fan = this._service.getFan(this.index!);

      if (fan) {
        // remplit le form avec les valeurs
        this.fanForm.patchValue(fan!);

        // pour ceratins input, nous devrons y aller de manière plus custom
        this.fanForm.get('birthDate')?.patchValue(this.formatDate(fan!.birthdate));

        for (let i = 0; i < fan!.series.length - 1; i++) {
          this.addSerie();
        }
        this.series.patchValue(
          fan!.series!.map((serie) => {
            return { serie: serie };
          }),
        );
      }
    });
  }

  addSerie() {
    this.series.push(
      this._formBuilder.group({
        serie: ['', Validators.required],
      }),
    );
  }

  removeSerie(index: number) {
    this.series.removeAt(index);
  }

  getSeries(): FormGroup[] {
    return this.series.controls as FormGroup[];
  }

  submitForm() {
    if (this.fanForm.valid) {
      const series = this.fanForm.get('series')!.value.map((value: any) => {
        return value['serie'];
      });

      let person: Person = new Person(
        this.fanForm.get('firstName')!.value,
        this.fanForm.get('lastName')!.value,
        this.fanForm.get('birthDate')!.value,
        series,
      );

      if (this.index !== undefined) {
        this._service.updateFan(this.index!, person);
      } else {
        this._service.addFan(person);
      }

      this._router.navigate(['/exo/routing/fan']);
    } else {
      this.fanForm.markAllAsTouched();
    }
  }

  private formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  goToList() {
    this._router.navigate(['/exo/routing/fan']);
  }

  gotoFan() {
    this._router.navigate(['/exo/routing/fan', this.index]);
  }
}
