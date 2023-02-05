import { ProductService } from './../product.service';
import { Iproducts } from './iproducts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 1;
  // listfilter: string = 'Cart';
  showImage: boolean = true;

  private _listfilter: string = '';

  constructor(private productService: ProductService) {}

  get listfilter(): string {
    return this._listfilter;
  }

  set listfilter(value: string) {
    this._listfilter = value;
    this.filteredProducts = this.performfilter(value);
    console.log('In Setter', value);
  }

  filteredProducts: Iproducts[] = [];
  products: Iproducts[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performfilter(filterBy: string): Iproducts[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproducts) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
    // console.log(this.filteredProducts);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:';
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // this.listfilter = '';
  }
}
