

export class Employee {

  firstName: string;
  lastName: string;
  private _department: string;

  // public string Department {
  //   get {}
  //   set {}
  // }
  get department(): string { return this._department; }
  set department(val: string) { this._department = val; }

  getInfo() {
    return `employee ${this.firstName} ${this.lastName} is a ${this.department}`;
  }
}

export const PI = 3.1415;

export function add(a: number, b: number): number {
  return a + b;
}
