import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { LabelGroupEntity } from 'src/labels/label-group/entities/label-group.entity';
import { CreateUserLabelDto } from 'src/labels/user-label/dto/create-user-label.dto';
import { UpdateUserLabelDto } from 'src/labels/user-label/dto/update-user-label.dto';

@Injectable()
export class UserLabelRepository {
  constructor(private readonly dbService: DbService) {}
  private userLabelDb = this.dbService.userLabel;

  private include = {
    label: {
      include: {
        labelGroup: true,
      },
    },
    user: true,
  };

  async create(createUserLabelDto: CreateUserLabelDto) {
    return await this.userLabelDb.create({ data: createUserLabelDto });
  }

  async findAll() {
    return await this.userLabelDb.findMany({ include: this.include });
  }

  async findOne(id: LabelGroupEntity['id']) {
    return await this.userLabelDb.findUnique({
      where: { id },
      include: this.include,
    });
  }

  async update(
    id: LabelGroupEntity['id'],
    updateUserLabelDto: UpdateUserLabelDto,
  ) {
    return await this.userLabelDb.update({
      where: { id },
      data: updateUserLabelDto,
    });
  }

  async remove(id: LabelGroupEntity['id']) {
    return await this.userLabelDb.delete({
      where: { id },
    });
  }

  async findByUserId(userId: string) {
    return await this.userLabelDb.findMany({
      where: { userId },
      include: this.include,
    });
  }
}
