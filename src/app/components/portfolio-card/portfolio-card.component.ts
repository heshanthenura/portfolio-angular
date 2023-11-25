import { Component, Input } from '@angular/core';
import { PORTFOLIO } from 'src/app/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  @Input() portfolio!: PORTFOLIO;
}
