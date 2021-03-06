import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  public id: string;

  @CreateDateColumn()
  public createdDate: Date;

  @Column()
  public askingPrice: number;

  @Column()
  public totalVolume: number;

  @Column()
  public minimumVolume: number;

  @Column()
  public requiredDate: Date;

  @ManyToOne(
    () => User,
    (user: User) => user.listings
  )
  public owner: User;
}
