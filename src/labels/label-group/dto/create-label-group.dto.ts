import { IsString } from 'class-validator';

export class CreateLabelGroupDto {
  @IsString()
  name: string;
}
