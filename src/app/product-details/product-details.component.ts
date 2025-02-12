import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product;
  data = null;

  constructor(private productService: ProductService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.data = changes['product'].currentValue;
    this.getProducts();
  }

  getProducts() {
    if (this.data) {
      this.productService.getProduct(this.data.orcs, this.data.activityType, this.data.activity.split('::')[1], this.data.identifier);
    }
  }
}
