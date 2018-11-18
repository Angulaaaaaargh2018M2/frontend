import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSend'
})
export class IsSendPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value ? 'Envoyé !' : 'Non envoyé.';
  }

}
