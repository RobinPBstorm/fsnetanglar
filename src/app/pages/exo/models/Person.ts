export class Person {
  lastName!: string;
  firstName!: string;
  birthdate!: Date;
  series!: string[];

  constructor(firstName: string, lastName: string, birthdate: Date, series: string[] = []) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthdate = birthdate;
    this.series = series;
  }
}
