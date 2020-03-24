import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Group } from 'src/group/group.entity';

@Entity()
export class People extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  address: string;

  @ManyToOne((type) => Group, (group) => group.people)
  group: Group;
}
