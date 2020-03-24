import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { PeopleRepository } from './people.repository';
import { PeopleDto } from './dto/people.dto';
import { People } from './people.entity';
import { GroupRepository } from 'src/group/group.repository';
import { PeopleUpdateDto } from './dto/people-update.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PeopleRepository)
    private peopleRepository: PeopleRepository,

    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async add(peopleDto: PeopleDto, groupId: number): Promise<People> {
    let group = null;
    if (groupId) {
      group = await this.groupRepository.findOne({ id: groupId });
    }
    return this.peopleRepository.add(peopleDto, group);
  }

  async find(id: string): Promise<People[]> {
    const option: any = {};
    if (id) {
      option.id = id;
    }
    return await this.peopleRepository.find(option);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.peopleRepository.delete(id);
  }

  async update(
    peopleUpdateDto: PeopleUpdateDto,
    id: string,
  ): Promise<UpdateResult> {
    return await this.peopleRepository.update(id, peopleUpdateDto);
  }
}
