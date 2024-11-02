import { IsString } from 'class-validator';

export class CreateUserLabelDto {
  @IsString()
  labelId: string;

  @IsString()
  userId: string;
}
