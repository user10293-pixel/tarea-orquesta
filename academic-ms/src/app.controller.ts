import { Controller, Get } from '@nestjs/common';

@Controller('academics')
export class AppController {
  @Get()
  getAcademicMessage(): string {
    return 'Hola, Yo soy Academic Microservice';
  }
}