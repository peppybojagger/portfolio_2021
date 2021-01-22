import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Sarah Martin | Front-end Developer in Fort Worth, Texas' });
		this.meta.addTag({ name: 'author', content: 'Sarah Martin' });
		this.meta.addTag({ name: 'keywords', content: 'Fort Worth, Texas, front-end developer portfolio, UI developer portfolio, javascript developer, angular developer' });
		this.meta.addTag({ name: 'robots', content: 'index, follow' });
  }


  ngOnInit(): void {
  }

}
