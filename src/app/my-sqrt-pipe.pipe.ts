import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MySqrtPipe'
})
export class MySqrtPipePipe implements PipeTransform {

  transform(value: number): number {
    return Math.sqrt(value);
  }

}
