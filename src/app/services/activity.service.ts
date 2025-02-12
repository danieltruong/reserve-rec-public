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
export class ActivityService {

  constructor(
    private dataService: DataService,
    private loggerService: LoggerService,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) { }

  async getActivity(orcs: string, activityType: string, activityId: string, fetchFacilities: boolean = false, fetchProducts: boolean = true) {
    const queryParams = {
      orcs: orcs,
      activityType: activityType,
      activityId: activityId,
    };

    if (fetchFacilities) {
      queryParams['fetchFacilities'] = true;
    }
    if (fetchProducts) {
      queryParams['fetchProducts'] = true;
    }

    try {
      this.loadingService.addToFetchList(Constants.dataIds.ACTIVITY_DETAILS_RESULT);
      const res = (await lastValueFrom(this.apiService.get(`activities`, queryParams)))['data'];
      this.dataService.setItemValue(Constants.dataIds.ACTIVITY_DETAILS_RESULT, res);
      this.loadingService.removeFromFetchList(Constants.dataIds.ACTIVITY_DETAILS_RESULT);
    } catch (error) {
      this.loggerService.error(error);
    }
  }
}
