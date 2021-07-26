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
export class TimeService {
    public dayjs(timeNow? : string | Date) {
        return dayjs(timeNow).tz();
    }
}