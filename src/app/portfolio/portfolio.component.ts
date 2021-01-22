import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';
import { ProjectService } from './project/project.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [ProjectService],
	animations: [
		trigger('photoState', [
			state('out', style({
				display: 'inherit',
				transform: 'translateX(-700px)',
				overflow: 'hidden',
			})),
			state('in', style({
				display: 'none',
				overflow: 'hidden',
			})),
			transition('* => *', animate('800ms ease-in')),
		])
	]
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
	
	out = true;

  get flyIn() {
    return this.out ? 'out' : 'in'
  }
  
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
}
