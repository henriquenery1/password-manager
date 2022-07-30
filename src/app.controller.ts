import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPasswords(): string {
    return this.appService.getAllPasswords();
  }

  @Post()
  createNewPassword() : string {
    return this.appService.createNewPassword();
  }

  @Delete()
  deleteOnePassword(): string {
    return this.appService.deleteOnePassword();
  }

  @Patch()
  updateOnePassword(): string {
    return this.appService.updateOnePassword();
  }
}
