import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'poc_kafka',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'poc_client',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'poc_consumer',
          },
        },
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
