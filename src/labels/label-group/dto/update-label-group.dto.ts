import { PartialType } from '@nestjs/mapped-types';
import { CreateLabelGroupDto } from './create-label-group.dto';

export class UpdateLabelGroupDto extends PartialType(CreateLabelGroupDto) {}
