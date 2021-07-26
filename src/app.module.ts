import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeService } from './time/time.service';

@Module({
  imports: [TimeService],
  controllers: [AppController],
  providers: [AppService , TimeService],
})
export class AppModule {}
