import { Component, OnInit } from '@angular/core';
import { Product } from '../share/product';
import { ProductService } from '../share/product.service';

import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product();
  key: any;


  constructor(
      private pS: ProductService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.key = params['key'];
            if (!this.key) {
                return;
            }
            this.pS.getOneProduct(this.key).snapshotChanges().subscribe(
                result => { this.product = result.payload.val(); console.log(result.payload.val()); },
                err => { console.log(err)}
            );
        });
    }

    onSubmit(pav: any) {
        if   (!this.key) {
            this.pS.cteateProduct(pav.value);
        } else {
            this.pS.updateProduct(this.key, pav.value);
        }
        this.router.navigate(['/']);
    }

    removeProduct() {

      console.log(this.key);
        this.pS.deleteProduct(this.key);
        this.router.navigate(['/']);
    }



}
