import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import Languages from '../models/language.enum';

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
}
