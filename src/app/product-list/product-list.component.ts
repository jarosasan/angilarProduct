import { Component, OnInit } from '@angular/core';
import { ProductService} from './share/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: any;

    constructor(private pS: ProductService) { }

    ngOnInit() {

        this.products =  this.pS.getAllProducts();
    }

}
