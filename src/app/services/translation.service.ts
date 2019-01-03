import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import Languages from '../models/language.enum';
import translationDict from '../data/html.translation.dict.en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _languageSubject = new BehaviorSubject<Languages>(Languages.es);
  language$ = this._languageSubject.asObservable();

  constructor() { }

  changeLanguage( lang: Languages ): void {
    this._languageSubject.next( lang );
  }

  getHtmlTranslation( value: string ): Observable<string> {
    const currentLanguage = this._languageSubject.getValue();
    if (currentLanguage === Languages.en) {
      return of( translationDict[value] );
    } else {
      return of( value );
    }
  }
}
