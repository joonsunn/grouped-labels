import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserLabelDto } from './dto/create-user-label.dto';
import { UpdateUserLabelDto } from './dto/update-user-label.dto';
// import { LabelService } from 'src/labels/label/label.service';
import { UserLabelRepository } from 'src/labels/user-label/user-label.repository';
import { LabelService } from 'src/labels/label/label.service';
import { UserService } from 'src/users/user/user.service';

@Injectable()
export class UserLabelService {
  constructor(
    private readonly userLabelRepository: UserLabelRepository,
    private readonly labelService: LabelService,

    @Inject(forwardRef(() => UserService))
    private readonly userSerivce: UserService,
  ) {}

  async create(createUserLabelDto: CreateUserLabelDto) {
    const labelId = createUserLabelDto.labelId;
    await this.labelService.findOne(labelId);

    const userId: string = createUserLabelDto.userId;
    await this.userSerivce.findOne(userId);

    return await this.userLabelRepository.create(createUserLabelDto);
  }

  async findAll() {
    return await this.userLabelRepository.findAll();
  }

  async findOne(id: string) {
    const userLabel = await this.userLabelRepository.findOne(id);
    if (!userLabel) {
      throw new NotFoundException('User label not found');
    }

    return userLabel;
  }

  async update(id: string, updateUserLabelDto: UpdateUserLabelDto) {
    await this.findOne(id);

    return await this.userLabelRepository.update(id, updateUserLabelDto);
  }

  async updateUserLabels(
    id: string,
    updateLabelGroupDto: UpdateUserLabelDto[],
  ) {
    const existingLabels = await this.findByUserId(id);
    const newLabelsIds = updateLabelGroupDto.map((label) => label.labelId);
    const toBeRemoved = existingLabels.filter(
      (label) => !newLabelsIds.includes(label.labelId),
    );
    const toBeAdded = updateLabelGroupDto.filter(
      (label) =>
        !existingLabels.map((label) => label.labelId).includes(label.labelId),
    );
    for (const label of toBeRemoved) {
      await this.remove(label.id);
    }
    for (const label of toBeAdded) {
      await this.create({
        userId: id,
        labelId: label.labelId,
      });
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.userLabelRepository.remove(id);
  }

  async findByUserId(userId: string) {
    await this.userSerivce.findOne(userId);
    return this.userLabelRepository.findByUserId(userId);
  }
}
