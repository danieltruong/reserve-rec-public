import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Constants } from '../constants';
import { lastValueFrom } from 'rxjs';
import { LoggerService } from './logger.service';
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private dataService: DataService,
    private loggerService: LoggerService,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) { }


  async fetchAll() {
    const queryParams = {
      text: 'all',
    };
    try {
      const res: any[] = (await lastValueFrom(this.apiService.get(`search`, queryParams)))['data']['hits'];
      this.dataService.setItemValue(Constants.dataIds.ALL, res);
    } catch (error) {
      this.loggerService.error(error);
    }
  }

  async searchForSomething(query: string) {
    const queryParams = {
      text: query,
    };
    try {
      this.loadingService.addToFetchList(Constants.dataIds.SEARCH_RESULTS);
      const res: any[] = (await lastValueFrom(this.apiService.get(`search`, queryParams)))['data']['hits'];
      this.dataService.setItemValue(Constants.dataIds.SEARCH_RESULTS, res);
      this.loadingService.removeFromFetchList(Constants.dataIds.SEARCH_RESULTS);
    } catch (error) {
      this.loggerService.error(error);
    }
  }
}

