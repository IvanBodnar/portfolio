import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onProjects() {
    const projects: HTMLDivElement = this.renderer.selectRootElement('.card-project', true);
    projects.scrollIntoView({ behavior: 'smooth' });
  }

  onCloseMobileMenu(): void {
    const navBar: HTMLDivElement = this.renderer.selectRootElement('#navbarNav', true);
    navBar.classList.remove('show');
  }

}
