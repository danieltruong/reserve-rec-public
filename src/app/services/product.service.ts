import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Constants } from '../constants';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { LoadingService } from './loading.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private dataService: DataService,
    private loggerService: LoggerService,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) { }

  async getProduct(orcs: string, activityType: string, activityId: string, productId: string, fetchSchedule: boolean = false, fetchPolicy: boolean = false, startDate: string = null, endDate: string = null) {
    // Pull default product object that isn't effected by time
    const queryParams = {
      orcs: orcs,
      activityType: activityType,
      activityId: activityId,
      productId: productId,
    };

    // Fetch availability from today to 2 weeks from now
    if (fetchSchedule) {
      queryParams['fetchSchedule'] = true;
    }
    if (fetchPolicy) {
      queryParams['fetchPolicy'] = true;
    }
    // Fetch availability up to specified date
    if (startDate) {
      queryParams['startDate'] = startDate;
    }
    // Fetch availability between date range
    if (endDate) {
      queryParams['endDate'] = endDate;
    }

    try {
      this.loadingService.addToFetchList(Constants.dataIds.PRODUCT_DETAILS_RESULT);
      const res = (await lastValueFrom(this.apiService.get(`products`, queryParams)))['data'];
      console.log('current product', res);
      this.dataService.setItemValue(Constants.dataIds.PRODUCT_DETAILS_RESULT, res);
      this.loadingService.removeFromFetchList(Constants.dataIds.PRODUCT_DETAILS_RESULT);
    } catch (error) {
      this.loggerService.error(error);
    }
  }
}
