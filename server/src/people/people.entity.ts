import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Group } from 'src/group/group.entity';
import { GenderEnum } from './enum/gender.enum';

@Entity()
export class People extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('enum', {
    name: 'gender',
    enum: GenderEnum,
    default: GenderEnum.male,
  })
  gender: GenderEnum;

  @Column({ nullable: true })
  address: string;

  @ManyToOne((type) => Group, (group) => group.people)
  group: Group;
}
