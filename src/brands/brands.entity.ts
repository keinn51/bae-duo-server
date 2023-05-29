import { Funding } from 'src/funding/funding.entity';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Brands extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdUserId: number;

  @Column()
  name: string;

  @Column()
  orderType: number;

  @Column()
  orderCnt: number;

  @Column()
  brandImage?: string;

  @Column()
  defaultDeadLine?: Date;

  @Column()
  defaultMinPrice?: number;

  @Column()
  defaultMinMember?: number;

  @Column()
  createdAt: string;

  @OneToMany((type) => Funding, (funding) => funding.brandId, {
    cascade: true,
  })
  @JoinColumn()
  funding: Funding;
}

class Upload extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdId: number;
}
