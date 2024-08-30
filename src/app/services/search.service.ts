import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Constants } from '../constants';
import { lastValueFrom } from 'rxjs';
import { LoggerService } from './logger.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private dataService: DataService,
    private loggerService: LoggerService,
    private apiService: ApiService
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
}

