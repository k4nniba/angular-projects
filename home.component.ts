import { Component, OnInit } from '@angular/core';
import { DataAPIService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: DataAPIService) { }
  allBooks;
  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.allBooks = this.bookService.getData();
  }
}
