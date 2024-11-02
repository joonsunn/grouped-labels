import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLabelDto } from './create-user-label.dto';

export class UpdateUserLabelDto extends PartialType(CreateUserLabelDto) {}
