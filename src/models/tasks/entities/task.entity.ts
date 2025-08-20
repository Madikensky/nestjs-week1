import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../enums/task-status.enum";
import { User } from "src/models/users/entities/user.entity";

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum'
  })
  status: TaskStatus

  @Column()
  created_at: string;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: "CASCADE"} )
  user: User;
}