import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTranslation'
})
export class HtmlTranslationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
