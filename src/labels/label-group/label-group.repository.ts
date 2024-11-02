import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateLabelGroupDto } from 'src/labels/label-group/dto/create-label-group.dto';
import { LabelGroupEntity } from 'src/labels/label-group/entities/label-group.entity';
import { UpdateUserDto } from 'src/users/user/dto/update-user.dto';

@Injectable()
export class LabelGroupRepository {
  constructor(private readonly dbService: DbService) {}
  private labelGroupDb = this.dbService.labelGroup;

  private include = {
    labels: true,
  };

  async create(createLabelGroupDto: CreateLabelGroupDto) {
    return await this.labelGroupDb.create({ data: createLabelGroupDto });
  }

  async findAll() {
    return await this.labelGroupDb.findMany({ include: this.include });
  }

  async findOne(id: LabelGroupEntity['id']) {
    return await this.labelGroupDb.findUnique({
      where: { id },
      include: this.include,
    });
  }

  async update(id: LabelGroupEntity['id'], updateUserDto: UpdateUserDto) {
    return await this.labelGroupDb.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: LabelGroupEntity['id']) {
    return await this.labelGroupDb.delete({
      where: { id },
    });
  }
}
