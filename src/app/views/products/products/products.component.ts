import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private http: HttpClient,
              // private cartService: CartService,
              private router: Router
  ) {}

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productService.getProducts();
    // console.log('Products:', this.products);
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      // .pipe(
      //   tap((result) => {
      //     console.log(result);
      //   }),
      //   map((result) => (result.data)),
      //   catchError(error => {
      //     // throw new Error('Something went wrong');
      //     return of([]);
      //   }),
      //   retry(3)
      // )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }


  // addToCart(title: string): void {
  //   // this.scrollTo(target);
  //   // this.formValues.productTitle = title;
  //   // this.cartService.count++; все закомментила на уроке с роутами
  //
  //   this.cartService.product = title;
  //   this.router.navigate(['/order'], {queryParams: {product: title}});
  // }
}
