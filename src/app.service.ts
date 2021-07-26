import { Injectable } from '@nestjs/common';
import { TimeService } from './time/time.service';

@Injectable()
export class AppService {

  constructor(private readonly timeService: TimeService) {
    this.onStart();
  }

  public async onStart() {
    try {
      const dateNow = this.timeService.dayjs().tz().format();
      console.log(dateNow);
    } catch (error) {
      console.log(error);
    }
  }

  // public async getDatesRange(start: Date, stop: Date): Promise<string[]> {
  //   const dateArray = [];
  //   let currentDate = dayjs(start).tz().format('YYYY-MM-DD');
  //   let stopDate = dayjs(stop).tz().format('YYYY-MM-DD');
  //   while (currentDate <= stopDate) {
  //     dateArray.push(dayjs(currentDate).tz().format('YYYY-MM-DD'))
  //     currentDate = dayjs(currentDate).add(1, 'days').format('YYYY-MM-DD');
  //   }
  //   console.log(dateArray)
  //   return dateArray;
  // }
}
