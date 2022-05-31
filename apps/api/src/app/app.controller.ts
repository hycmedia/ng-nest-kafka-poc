import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

import { Message } from '@ng-nest-kafka-starter/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
    @Inject('poc_kafka') private readonly kafkaClient: ClientKafka
  ) {}

  @Get('hello')
  getData(): any {
    this.kafkaClient.emit('poc.messages', {message: 'Hello world'});

    return {status: 'sent!'};
  }
}
