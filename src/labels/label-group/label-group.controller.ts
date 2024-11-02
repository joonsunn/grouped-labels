import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LabelGroupService } from './label-group.service';
import { CreateLabelGroupDto } from './dto/create-label-group.dto';
import { UpdateLabelGroupDto } from './dto/update-label-group.dto';

@Controller('label-group')
export class LabelGroupController {
  constructor(private readonly labelGroupService: LabelGroupService) {}

  @Post()
  create(@Body() createLabelGroupDto: CreateLabelGroupDto) {
    return this.labelGroupService.create(createLabelGroupDto);
  }

  @Get()
  findAll() {
    return this.labelGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labelGroupService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLabelGroupDto: UpdateLabelGroupDto,
  ) {
    return this.labelGroupService.update(id, updateLabelGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labelGroupService.remove(id);
  }
}
