import {Pipe, PipeTransform} from '@angular/core';

import {TranslationService} from '../services/translation.service';
import {Observable} from 'rxjs';

@Pipe({
  name: 'htmlTranslation',
  pure: false
})
export class HtmlTranslationPipe implements PipeTransform {

  constructor(
    private translationService: TranslationService
  ) { }

  transform( value: string ): Observable<string> {
    return this.translationService.getHtmlTranslation( value );
  }

}


