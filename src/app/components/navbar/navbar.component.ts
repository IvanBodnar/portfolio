import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  onProjects() {
    const projects: HTMLDivElement = this.renderer.selectRootElement('.card-project', true);
    projects.scrollIntoView({ behavior: 'smooth' });
  }

}
