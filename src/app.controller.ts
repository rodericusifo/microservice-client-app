import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AccumulateBodyRequest } from './request/body/accumulate-body.request';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Post('add')
  async accumulate(@Body() body: AccumulateBodyRequest) {
    this.logger.log(`Adding ${body.data.toString()}`);
    return this.appService.accumulate({ ...body });
  }
}
