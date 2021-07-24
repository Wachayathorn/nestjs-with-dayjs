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
    this.test();
  }

  public async test() {
    try {
      const now = dayjs().tz();
      console.log(now);

      const date1 = dayjs('2021-08-02');
      const date2 = dayjs('2021-07-31');
      const result = date1.diff(date2);
      console.log(result);

      const isBetween =  dayjs('2021-07-01').isBetween('2021-07-01', '2021-07-31');
      console.log(isBetween);
    } catch (error) {
      console.log(error);
    }
  }
}
