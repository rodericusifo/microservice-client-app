import { ClientOptions, Transport } from '@nestjs/microservices';

export class AppClientMicroserviceConfig {
  static getAppServiceOptions(): ClientOptions {
    return {
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    };
  }
}
