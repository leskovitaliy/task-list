import { Injectable } from '@angular/core';
import { ITimePassed } from '../interfaces/task';

@Injectable()
export class TimeService {

  constructor() { }

  getTimePassed(dateCreated): ITimePassed {
    const secondsNow = Date.now();
    const secondsCreated = new Date(dateCreated).getTime();
    const secondsDiff = secondsNow - secondsCreated;
    const timePassed = this.parseTimeFromSeconds(secondsDiff);
    // sec 4181.155
    // min 69.68591666666667
    // h 1.1614319444444445
    // d 0.048392997685185186
    return this.getDataForDisplay(timePassed);
  }

  parseTimeFromSeconds(seconds: number) {
    return {
      sec: seconds / 1000,
      min: seconds / (1000 * 60),
      hour: seconds / (1000 * 3600),
      day: seconds / (1000 * 3600 * 24),
      month: seconds / (1000 * 3600 * 24 * 30)
    };
  }

  getDataForDisplay(data): ITimePassed {
    const dateForDisplay = {
      value: 0,
      description: ''
    };

    if (data.sec < 60) {
      dateForDisplay.value = null;
      dateForDisplay.description = 'less than a minute';
    } else if (data.sec >= 60 && data.min < 60) {
      dateForDisplay.value = data.min;
      dateForDisplay.description = 'minutes';
    } else if (data.min >= 60 && data.hour < 24) {
      dateForDisplay.value = data.hour;
      dateForDisplay.description = 'hours';
    } else if (data.hour >= 24 && data.day < 30) {
      dateForDisplay.value = data.day;
      dateForDisplay.description = 'days';
    } else if (data.day >= 30 && data.day < 31) {
      dateForDisplay.value = null;
      dateForDisplay.description = 'month';
    } else if (data.day >= 31 && data.day < 365) {
      dateForDisplay.value = null;
      dateForDisplay.description = 'more month';
    } else if (data.day >= 365 && data.day < 366) {
      dateForDisplay.value = null;
      dateForDisplay.description = 'year';
    } else if (data.day >= 366) {
      dateForDisplay.value = null;
      dateForDisplay.description = 'more year';
    }

    return dateForDisplay;
  }

}
