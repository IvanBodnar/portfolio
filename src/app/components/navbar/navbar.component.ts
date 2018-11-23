import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarMobile: HTMLDivElement;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit() {
    this.navbarMobile = this.renderer.selectRootElement('#navbarNav', true);
  }

  onProjects() {
    const projects: HTMLDivElement = this.renderer.selectRootElement('.card-project', true);
    projects.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick() {
    this.navbarMobile.classList.remove('show');
  }

}
