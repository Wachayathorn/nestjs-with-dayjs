import { Injectable } from '@nestjs/common';
import { TimeService } from './time/time.service';

@Injectable()
export class AppService {

  constructor(private readonly timeService: TimeService) {
    this.onStart();
    // this.getDatesRange('2021-12-31T02:30:00.000Z' , '2022-01-01T17:00:00.000Z')
  }

  public async onStart() {
    try {
      const dateNow = this.timeService.dayjs().tz().format();
      console.log(dateNow);
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
