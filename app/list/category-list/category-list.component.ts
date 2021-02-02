import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private svc : CategoryServiceService ) { }
  categories:any;
  ngOnInit(): void {
    this.svc.getAllCategories().subscribe(
      cats=>{
          this.categories=cats;
          console.log(this.categories)
      },
      error=>{
        console.log(error);
      }
      
    );
  }

}
