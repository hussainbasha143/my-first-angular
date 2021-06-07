import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class CheckpipePipe implements PipeTransform {

  transform(value: any): any {
    //return value + " " +r;
    console.log("value----"+value);
    let currentYear : any=new Date().getFullYear();
    console.log("currentYear----"+currentYear);
    let userBirthYear:any=new Date(value).getFullYear();
    console.log("userBirthYear----"+userBirthYear);
    let currentAge=currentYear-userBirthYear;
    console.log("currentAge----"+currentAge);
    return currentAge;
  }

}
