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
  logged : boolean  = false;
  ngOnInit():void {
    const token = localStorage.getItem('token');
    if(token){
      this.logged =true;
      this.getCategories();
    }
  }
  constructor(private CategoryService : CategoryService) {
  }
  getCategories(){
    this.CategoryService.getCategories().subscribe((data)=>{
      this.categories = data;
    })
  }
}

