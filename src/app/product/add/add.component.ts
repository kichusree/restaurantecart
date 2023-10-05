import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
constructor( private fb:FormBuilder,private ds:DataService,private router: Router) {}
ngOnInit(): void {
    
}
// model form
addForm=this.fb.group({
  id:[''],
  productName:[''],
  price:3494,
  productImage:[''],
  isAvailable:[''],
  review:[''],
  descript:[''],
  rating:[''],
  categoryId:['']
})
addProduct(){
  let path=this.addForm.value
  const newData={
    id:path.id,
  productName:path.productName,
  price:path.price,
  productImage:path.productImage,
  isAvailable:path.isAvailable,
  review:path.review,
  descript:path.descript,
  rating:path.rating,
  categoryId:path.categoryId
  }
  this.ds.addNewProduct(newData).subscribe((data:any)=>{
    alert("added new data")
    this.router.navigateByUrl('product')

  })
}
}
