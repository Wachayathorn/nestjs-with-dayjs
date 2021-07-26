import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as isBetween from 'dayjs/plugin/isBetween';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Bangkok");

@Injectable()
export class AppService {

  constructor() {
    // this.test();
    this.getDatesRange(new Date('2021-08-02T01:30:00.000Z'), new Date('2021-08-05T21:00:00.000Z'))
  }

  public async test() {
    try {
      const now = dayjs().tz();
      console.log(now);

      const date1 = dayjs('2021-08-05T21:00:00.000Z').tz();
      const date2 = dayjs('2021-08-02T01:30:00.000Z').tz();
      console.log(date2, date1);

      const isBetween = dayjs('2021-07-01').isBetween('2021-07-01', '2021-07-31');
      console.log(isBetween);
    } catch (error) {
      console.log(error);
    }
  }

  public async getDatesRange(start: Date, stop: Date): Promise<string[]> {
    const dateArray = [];
    let currentDate = dayjs(start).tz().format('YYYY-MM-DD');
    let stopDate = dayjs(stop).tz().format('YYYY-MM-DD');
    while (currentDate <= stopDate) {
      dateArray.push(dayjs(currentDate).tz().format('YYYY-MM-DD'))
      currentDate = dayjs(currentDate).add(1, 'days').format('YYYY-MM-DD');
    }
    console.log(dateArray)
    return dateArray;
  }
}
