import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsArray, IsObject } from 'class-validator';
import { UpdateUserLabelDto } from 'src/labels/user-label/dto/update-user-label.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  userLabels?: UpdateUserLabelDto[];
}
