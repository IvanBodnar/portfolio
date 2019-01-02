import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

import {TranslationService} from '../../services/translation.service';
import Languages from '../../models/language.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarMobile: HTMLDivElement;

  constructor(
    private translationService: TranslationService,
    private renderer: Renderer2,
    public router: Router
  ) { }

  ngOnInit() {
    this.navbarMobile = this.renderer.selectRootElement('#navbarNav', true);
  }

  onProjects() {
    const projects: HTMLDivElement = this.renderer.selectRootElement('.card-project', true);
    projects.scrollIntoView({ behavior: 'smooth' });
  }

  onSelectLang( event: Event ): void {
    // @ts-ignore
    const selectValue = event.target.value;
    const selectedLanguage = selectValue === 'Español' ? Languages.es : selectValue === 'English' ? Languages.en : null;
    this.translationService.changeLanguage( selectedLanguage );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick() {
    this.navbarMobile.classList.remove('show');
  }

}
