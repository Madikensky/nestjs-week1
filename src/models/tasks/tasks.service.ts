import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { TaskStatus } from './enums/task-status.enum';
import { CreateTaskDto } from './dtos/createTaskDto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {}

  //CRUD - create, read, update, delete

  async createTask(dto: CreateTaskDto) {
    const task = this.taskRepository.create({
      title: dto.title,
      description: dto.description,
      status: dto.status,
      user: {id: dto.userId}
    });
    return await this.taskRepository.save(task);
  }

  async getTasksByUser(id: number, status?: TaskStatus) {
    return await this.taskRepository.find({
      where: {
        user: {id: id},
        ...(status && { status })
      }
    })
  }

  async updateTask(taskId: number, userId: number, title?: string, description?: string, status?: TaskStatus) {

  }
}
