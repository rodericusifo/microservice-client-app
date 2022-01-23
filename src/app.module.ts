import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppClientMicroserviceConfig } from './config/app-client-microservice.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'APP_SERVICE',
        ...AppClientMicroserviceConfig.getAppServiceOptions(),
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
