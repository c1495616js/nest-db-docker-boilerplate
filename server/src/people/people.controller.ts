import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { PeopleService } from './people.service';
import { PeopleDto } from './dto/people.dto';
import { PeopleUpdateDto } from './dto/people-update.dto';
import { People } from './people.entity';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get(':id?')
  find(@Param('id') id): Promise<People[]> {
    return this.peopleService.find(id);
  }

  @Post('/add/:groupId?')
  add(
    @Body(ValidationPipe) peopleDto: PeopleDto,
    @Param('groupId') groupId,
  ): Promise<People> {
    return this.peopleService.add(peopleDto, groupId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id): Promise<DeleteResult> {
    return this.peopleService.remove(id);
  }

  @Patch(':id')
  async update(
    @Body(ValidationPipe) peopleUpdateDto: PeopleUpdateDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<UpdateResult> {
    return this.peopleService.update(peopleUpdateDto, id);
  }
}
