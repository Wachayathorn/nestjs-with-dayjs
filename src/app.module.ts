import { PromModule } from '@digikare/nestjs-prom';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeService } from './time/time.service';

@Module({
  imports: [PromModule.forRoot({
    defaultLabels: {
      app: 'app',
      version: '1.0.0',
    }
  }),
    TimeService],
  controllers: [AppController],
  providers: [AppService, TimeService],
})
export class AppModule { }
