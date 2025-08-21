import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional } from "class-validator";
import { TaskStatus } from "../enums/task-status.enum";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;

  @IsNumber()
  userId: number;
}