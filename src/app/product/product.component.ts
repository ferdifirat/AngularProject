import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  products : Product[] = [
    {id : 1, name :"Laptop", price:2500, categoryId:1, description: "Asus ZenBook", imageUrl:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/TeoriV2-96812_large.jpg"},
    {id : 2, name :"Mouse", price:50, categoryId:2, description: "Asus ZenBook", imageUrl:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/TeoriV2-97155_large.jpg"},
    {id : 3, name :"Ekran", price:1000, categoryId:2, description: "Asus ZenBook", imageUrl:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/109867_small.jpg"},
    {id : 4, name :"Klavye", price:200, categoryId:1, description: "Asus ZenBook", imageUrl:"https://caspermedia.mncdn.com/uploads/2020/10/klavye-mouse-set_op.webp"}

  ]

  ngOnInit(): void {
  }

}
