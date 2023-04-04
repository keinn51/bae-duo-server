import { Controller, Get } from '@nestjs/common';
import { AttendantService } from './attendant.service';
import { Attendant } from './attendant.entity';

@Controller('attendant')
export class AttendantController {
  constructor(private attendantService: AttendantService) {}

  @Get('/')
  async getAllAttendants(): Promise<Attendant[]> {
    return this.attendantService.getAllAttendants();
  }
}