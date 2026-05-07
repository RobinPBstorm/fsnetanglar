import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DescriptionContent } from '../../validators/description-content';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  articleForms: FormGroup | undefined;
  reviews!: FormArray;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reviews = this._formBuilder.array([
        this._formBuilder.group({
          review: new FormControl(null)
        })
      ]
    )

    this.articleForms = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5), DescriptionContent(["Gavin"])]),
      reviews: this.reviews
    });
  }

  addReview() {
    this.reviews.push(
      this._formBuilder.group({
        review: new FormControl(null),
      }),
    );
  }

  removeReview(index: number) {
    this.reviews.removeAt(index)
  }

  getReviews() : FormGroup[] {
    return this.reviews.controls as FormGroup[];
  }

  sendForm() {
    if (this.articleForms?.valid) {
      console.log("mon formulaire est envoyé");
    } else {
      console.error("Une erreur est survenue");
    }
  }

  protected readonly FormControl = FormControl;
}
