import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class AppController {
  @Get()
  getUserMessage(): string {
    return 'Hola, Yo soy User Microservice';
  }
}