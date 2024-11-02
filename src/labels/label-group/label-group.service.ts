import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLabelGroupDto } from './dto/create-label-group.dto';
import { UpdateLabelGroupDto } from './dto/update-label-group.dto';
import { LabelGroupRepository } from 'src/labels/label-group/label-group.repository';

@Injectable()
export class LabelGroupService {
  constructor(private readonly labelGroupRepository: LabelGroupRepository) {}

  async create(createLabelGroupDto: CreateLabelGroupDto) {
    return await this.labelGroupRepository.create(createLabelGroupDto);
  }

  async findAll() {
    return await this.labelGroupRepository.findAll();
  }

  async findOne(id: string) {
    const labelGroup = await this.labelGroupRepository.findOne(id);

    if (!labelGroup) {
      throw new NotFoundException('Label group not found');
    }

    return labelGroup;
  }

  async update(id: string, updateLabelGroupDto: UpdateLabelGroupDto) {
    await this.findOne(id);
    return await this.labelGroupRepository.update(id, updateLabelGroupDto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.labelGroupRepository.remove(id);
  }
}
