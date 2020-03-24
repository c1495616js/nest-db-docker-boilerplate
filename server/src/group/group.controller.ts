import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { GroupDto } from './dto/group.dto';
import { Group } from './group.entity';
import { GroupService } from './group.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post('/add')
  async add(@Body(ValidationPipe) groupDto: GroupDto): Promise<Group> {
    return await this.groupService.add(groupDto);
  }

  @Get(':id?')
  async find(@Param('id') id): Promise<Group[]> {
    return await this.groupService.find(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<DeleteResult> {
    return await this.groupService.remove(id);
  }

  @Patch(':id')
  async update(
    groupDto: GroupDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<UpdateResult> {
    return await this.groupService.update(groupDto, id);
  }
}
