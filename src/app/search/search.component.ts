import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  example: string;

  constructor(private router: Router) {
    let navigation = this.router.getCurrentNavigation();
    let state = navigation?.extras.state as { example: string };
    this.example = state.example;
  }

  ngOnInit() {
    window.scroll(0, 0)
    NavbarComponent.searchObs.subscribe((search: string) => {
      this.example = search;
    })
  }

}
