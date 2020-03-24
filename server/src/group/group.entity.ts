import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import { People } from 'src/people/people.entity';

@Entity()
@Unique(['name'])
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => People, (people) => people.group, { eager: true })
  people: People[];
}
