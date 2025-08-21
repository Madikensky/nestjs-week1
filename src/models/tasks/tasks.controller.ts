import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dtos/createTaskDto';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dtos/updateTask.dto';
import { TaskStatus } from './enums/task-status.enum';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post('create-task')
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.createTask(createTaskDto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateTaskDto) {
    return await this.taskService.updateTask(id, updateDto);
  }

  @Get()
  async getTasks(@Query('userId', ParseIntPipe) userId: number, @Query('status') status: TaskStatus) {
    return await this.taskService.getTasksByUser(userId, status);
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) taskId: number) {
    return await this.taskService.deleteTask(taskId);
  }

}

