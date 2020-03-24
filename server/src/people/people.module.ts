import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleRepository } from './people.repository';
import { GroupRepository } from 'src/group/group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleRepository, GroupRepository])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
