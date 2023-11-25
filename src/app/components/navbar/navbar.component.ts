import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {}

  scrolled: boolean = false;
  showMobileMenu: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrolled = window.scrollY > 5;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  scrollToAbout() {
    const aboutSection =
      this.el.nativeElement.ownerDocument.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToServices() {
    const aboutSection =
      this.el.nativeElement.ownerDocument.getElementById('services');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToContacts() {
    const aboutSection =
      this.el.nativeElement.ownerDocument.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToPortfolio() {
    const aboutSection =
      this.el.nativeElement.ownerDocument.getElementById('portfolio');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
