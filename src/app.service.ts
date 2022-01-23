import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AccumulatePayload } from './payload/accumulate.payload';

@Injectable()
export class AppService {
  constructor(@Inject('APP_SERVICE') private readonly client: ClientProxy) {}

  async accumulate(payload: AccumulatePayload) {
    return this.client.send<number, AccumulatePayload>('add', payload);
  }
}
