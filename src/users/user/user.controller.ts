import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import isEqual from 'lodash/isEqual';
import { QueryUserDto } from 'src/users/user/dto/query-user.dto';

@Controller('user')
export class UserController {
  private logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() query: QueryUserDto) {
    if (isEqual(query, {})) {
      return await this.userService.findAll();
    }

    return await this.userService.findAllByQuery(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    this.logger.log('find by Id' + id);
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}