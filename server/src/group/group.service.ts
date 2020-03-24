import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupRepository } from './group.repository';
import { GroupDto } from './dto/group.dto';
import { Group } from './group.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async add(groupDto: GroupDto): Promise<Group> {
    return await this.groupRepository.add(groupDto);
  }

  async find(id: string): Promise<Group[]> {
    const option: any = {};
    if (id) {
      option.id = id;
    }
    return await this.groupRepository.find(option);
  }

  async update(groupDto: GroupDto, id: string): Promise<UpdateResult> {
    return await this.groupRepository.update(id, groupDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.groupRepository.delete(id);
  }
}
