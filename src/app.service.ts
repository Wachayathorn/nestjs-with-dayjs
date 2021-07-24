import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc)
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
    } catch (error) {
      console.log(error);
    }
  }
}
