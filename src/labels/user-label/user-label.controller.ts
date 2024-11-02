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
import { UserLabelService } from './user-label.service';
import { CreateUserLabelDto } from './dto/create-user-label.dto';
import { UpdateUserLabelDto } from './dto/update-user-label.dto';

@Controller('user-label')
export class UserLabelController {
  private logger = new Logger(UserLabelController.name);

  constructor(private readonly userLabelService: UserLabelService) {}

  @Post()
  async create(@Body() createUserLabelDto: CreateUserLabelDto) {
    return await this.userLabelService.create(createUserLabelDto);
  }

  @Get()
  async findAll() {
    return await this.userLabelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userLabelService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserLabelDto: UpdateUserLabelDto,
  ) {
    return await this.userLabelService.update(id, updateUserLabelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userLabelService.remove(id);
  }
}
