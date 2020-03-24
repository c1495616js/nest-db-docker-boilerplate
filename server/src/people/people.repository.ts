import { Repository, EntityRepository } from 'typeorm';
import { People } from './people.entity';
import { PeopleDto } from './dto/people.dto';
import { Group } from 'src/group/group.entity';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(People)
export class PeopleRepository extends Repository<People> {
  async add(peopleDto: PeopleDto, group: Group): Promise<People> {
    const { name, gender, address } = peopleDto;
    const people = new People();
    people.name = name;
    people.gender = gender;
    people.address = address;
    if (group) {
      people.group = group;
    }

    try {
      return await people.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
