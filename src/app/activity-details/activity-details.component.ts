import { Component, effect, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from '../constants';
import { DataService } from '../services/data.service';
import { ActivityService } from '../services/activity.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent implements OnInit {
  public orcs;
  public activityType;
  public identifier;
  public data = null;

  constructor(private route: ActivatedRoute, private activityService: ActivityService, private dataService: DataService, private productService: ProductService) {
    effect(() => {
      // const previousData = this.data;
      this.data = this.dataService.watchItem(Constants.dataIds.ACTIVITY_DETAILS_RESULT)();
      // if (JSON.stringify(previousData) !== JSON.stringify(this.data)) {
      //   this.getProducts();
      // }
    })
    // {
    //   allowSignalWrites: true
    // });
  }

  getProducts() {
    // After we get data, get products
    if (this.data) {
      for (const product of this.data?.products) {
        this.productService.getProduct(this.orcs, this.activityType, this.identifier, product.id);
      }
    }
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.orcs = params.get('orcs');
    this.activityType = params.get('activityType');
    this.identifier = params.get('identifier');

    this.activityService.getActivity(this.orcs, this.activityType, this.identifier);
  }

}
