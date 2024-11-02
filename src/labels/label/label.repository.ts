import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { LabelGroupEntity } from 'src/labels/label-group/entities/label-group.entity';
import { CreateLabelDto } from 'src/labels/label/dto/create-label.dto';
import { UpdateLabelDto } from 'src/labels/label/dto/update-label.dto';

@Injectable()
export class LabelRepository {
  constructor(private readonly dbService: DbService) {}
  private labelDb = this.dbService.label;

  private include = {
    labelGroup: true,
  };

  async create(createLabelDto: CreateLabelDto) {
    return await this.labelDb.create({ data: createLabelDto });
  }

  async findAll() {
    return await this.labelDb.findMany({
      include: this.include,
    });
  }

  async findOne(id: LabelGroupEntity['id']) {
    return await this.labelDb.findUnique({
      where: { id },
      include: this.include,
    });
  }

  async update(id: LabelGroupEntity['id'], updateLabelDto: UpdateLabelDto) {
    return await this.labelDb.update({
      where: { id },
      data: updateLabelDto,
    });
  }

  async remove(id: LabelGroupEntity['id']) {
    return await this.labelDb.delete({
      where: { id },
    });
  }
}
