import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { LabelService } from './label.service';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';

@Controller('label')
export class LabelController {
  private logger = new Logger(LabelController.name);

  constructor(private readonly labelService: LabelService) {}

  @Post()
  async create(@Body() createLabelDto: CreateLabelDto) {
    return await this.labelService.create(createLabelDto);
  }

  @Get()
  async findAll() {
    return await this.labelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.labelService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLabelDto: UpdateLabelDto,
  ) {
    return await this.labelService.update(id, updateLabelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.labelService.remove(id);
  }
}
