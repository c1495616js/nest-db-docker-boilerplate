import { EntityRepository, Repository } from 'typeorm';
import { Group } from './group.entity';
import { GroupDto } from './dto/group.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Group)
export class GroupRepository extends Repository<Group> {
  async add(groupDto: GroupDto): Promise<Group> {
    const { name } = groupDto;
    const group = new Group();
    group.name = name;
    try {
      return await group.save();
    } catch ({ code }) {
      if (code === 23505) {
        throw new ConflictException('Group Name already used');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
