import { Controller, Get, All } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @All('users')
  async proxyToUser() {
    const url = `${process.env.USER_MS_URL}/users`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  @All('academics')
  async proxyToAcademic() {
    const url = `${process.env.ACADEMIC_MS_URL}/academics`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  @All('communications')
  async proxyToCommunication() {
    const url = `${process.env.COMMUNICATION_MS_URL}/communications`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}