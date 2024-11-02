import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from 'src/users/user/user.repository';
import { QueryUserDto } from 'src/users/user/dto/query-user.dto';
import { UserLabelService } from 'src/labels/user-label/user-label.service';
// import { UserEntity } from 'src/users/user/entities/user.entity';
import { UpdateUserDto } from 'src/users/user/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,

    @Inject(forwardRef(() => UserLabelService))
    private readonly userLabelService: UserLabelService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    const { userLabels: newLabels, ...scalarFields } = updateUserDto;

    if (newLabels) {
      await this.userLabelService.updateUserLabels(id, newLabels);
    }

    return await this.userRepository.update(id, scalarFields);
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.userRepository.remove(id);
  }

  async findAllByQuery(query: QueryUserDto) {
    return await this.userRepository.findAllByQuery(query);
  }
}
