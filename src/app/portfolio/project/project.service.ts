import { Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {

    @Output()
    projects: Project[] = [
        new Project('Bud-dy', 'I built Bud-dy to manage my collection of houseplants and keep track of watering. This PWA is built with Node and Express and consumes Trefle\'s botanical API for all of the plant data. Users can create an accout and manage their own plants!', '/assets/img/bud-dy.jpg', 'Gardening and houseplant management app using Trefle\'s botanical data source API built with Node + Express.', 'bud-dy', 'https://bud-dy-app.herokuapp.com/', 'NodeJS, Express, API, mongoose, MongoDB, AWS, npm'),
        new Project('Ageless Iron', 'Ageless Iron was the newest brand to be released under the Regal Brands family of hardware. Built on wordpress to allow easy conversion to e-commerce in the future.', '/assets/img/ageless.png', 'Ageless Iron perfectly captures the look and feel of solid bronze hardware at an affordable price.', 'ageless', 'https://agelessironhardware.com/', 'HTML5, CSS3, bootstrap, wordpress, jquery, PHP, MySQL'),
        new Project('Regal Brands', 'Regal Brands is the parent company of Nostalgic Warehouse, Grandeur Hardware, and Ageless Iron. We wanted a website that served as a main hub for all lines.', '/assets/img/regal.jpg', 'Parent company of Nostalgic Warehouse, Grandeur Hardware, Ageless Iron, and Viaggio Hardware', 'regal', 'https://regal-brands.com/', 'HTML5, CSS3, bootstrap, wordpress, jquery, PHP, MySQL'),
        new Project('Acme Manufacturing Company', 'The Acme site was the first major site rehaul I did while working at Acme MFG. They needed a new site that portrayed the feel of the company and what brands make up the Acme family.', '/assets/img/acme.jpg', 'Acme Manufacturing is a prime manufacturer of a variety of metal products.', 'acme', 'https://acmemfgco.com', 'HTML5, CSS3, bootstrap, wordpress, jquery, PHP, MySQL'),
        new Project('Kyle Whitaker', 'Attorneys depend on their website traffic for obtaining new clients, so a user-friendly, fast and SEO-perfect website is important. Kyle Whitaker wanted a bright, clean and modern site to attract new clients and get leads. I decided to use wordpress so they could easily and continually add new blog posts and content, generating better SEO rankings.', '/assets/img/kyle-whitaker.png', 'Fort Worth, Texas Criminal & Family Law Attorney', 'kyle-whitaker', 'https://kwhitaker.com', 'HTML5, CSS3, bootstrap, wordpress, jquery, PHP, MySQL'),
        new Project('Valerie Moore', 'Attorneys depend on their website traffic for obtaining new clients, so a user-friendly, fast and SEO-perfect website is important. Valerie Moore wanted a feminine, classy site to attract new clients and get leads. I decided to use wordpress so they could continually add new blog posts, generating better SEO rankings.', '/assets/img/valerie-moore.png', 'Kansas City Family Law Attorney', 'valerie-moore', 'https://www.vintonmoorelaw.com/', 'HTML5, CSS3, bootstrap, wordpress, jquery, PHP, MySQL'),
        new Project('Realty Cards', 'This is the main site I maintained and improved while working at Redfire Creative. It started as a basic, outdated HTML site with practically no javascript and a very basic ordering system through jotform. This site has amazing SEO rankings and does tons of business, so I started building a complete back-end in PHP and MySQL to manage orders, customers, and products.', '/assets/img/realty-cards.png', 'The web`s leading real estate marketing company.', 'realty-cards', 'https://www.realty-cards.com/', 'HTML5, CSS3 (SASS), bootstrap, ES6, jquery, PHP, MySQL')
    ];

    getProjects(): Observable<Project[]> {
        return of(this.projects);
    };

    getProjectBySlug(s) {
        for (var i=0; i < this.projects.length; i++) {
            if (this.projects[i].slug === s) {
                return this.projects[i];
            }
        }
    }
}