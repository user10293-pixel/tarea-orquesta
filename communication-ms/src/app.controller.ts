import { Controller, Get } from '@nestjs/common';

@Controller('communications')
export class AppController {
  @Get()
  getCommunicationMessage(): string {
    return 'Hola, Yo soy Communication Microservice';
  }
}