import { IsString, IsNotEmpty, IsEnum, IsNumber } from "class-validator";
import { TaskStatus } from "../enums/task-status.enum";

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsNumber()
  userId: number;
}