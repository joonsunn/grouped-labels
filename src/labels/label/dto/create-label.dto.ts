import { IsString } from 'class-validator';

export class CreateLabelDto {
  @IsString()
  name: string;

  @IsString()
  labelGroupId: string;
}
