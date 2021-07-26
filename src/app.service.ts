import { Injectable } from '@nestjs/common';
import { TimeService } from './time/time.service';

@Injectable()
export class AppService {

  constructor(private readonly timeService: TimeService) {
    this.onStart();
  }

  public async onStart() {
    try {
      const dateNow = this.timeService.dayjs();
      console.log(dateNow)
    } catch (error) {
      console.log(error);
    }
  }

  public async getDatesRange(start: string, stop: string): Promise<string[]> {
    const dateArray = [];
    let currentDate = this.timeService.dayjs(start).tz().format('YYYY-MM-DD');
    let stopDate = this.timeService.dayjs(stop).tz().format('YYYY-MM-DD');
    while (currentDate <= stopDate) {
      dateArray.push(this.timeService.dayjs(currentDate).tz().format('YYYY-MM-DD'))
      currentDate = this.timeService.dayjs(currentDate).add(1, 'days').format('YYYY-MM-DD');
    }
    console.log(dateArray)
    return dateArray;
  }
}
