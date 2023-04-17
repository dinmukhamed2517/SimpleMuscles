import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories!: Category[];
  ngOnInit():void {
    this.categories = this.CategoryService.getAll();
  }
  constructor(private CategoryService : CategoryService) {
  }
}
