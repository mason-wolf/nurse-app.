import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['search'], { queryParams: { searchTerm: this.searchTerm } });
  }
}
