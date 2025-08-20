import { Task } from "src/models/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[]
}