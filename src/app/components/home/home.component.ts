import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { PORTFOLIO } from 'src/app/portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Home';
  skill!: String;
  skills: String[] = [
    'Java',
    'JavaFX',
    'Spring Boot',
    'Spring Security',
    'H2',
    'MySQL',
    'SQLite',
    'WebRTC',
    'WebSocket',
    'GitHub',
    'Oracle Cloud',
    'Linux',
  ];
  currentIndex: number = 0;

  portfolioData: PORTFOLIO[] = [];

  constructor(private http: HttpClient) {}

  showSkills(): void {
    setInterval(() => {
      this.skill = this.skills[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.skills.length;
    }, 2000);
  }

  ngOnInit(): void {
    this.http
      .get<{ portfolio: PORTFOLIO[] }>('../../../assets/portfolio.json')
      .subscribe(
        (data) => {
          this.portfolioData = data.portfolio;
        },
        (error) => {
          console.error('Error fetching portfolio data:', error);
        }
      );
  }
}
