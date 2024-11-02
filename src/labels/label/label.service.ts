import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { LabelRepository } from 'src/labels/label/label.repository';
import { LabelGroupService } from 'src/labels/label-group/label-group.service';

@Injectable()
export class LabelService {
  constructor(
    private readonly labelRepository: LabelRepository,
    private readonly labelGroupService: LabelGroupService,
  ) {}

  async create(createLabelDto: CreateLabelDto) {
    const labelGroupId = createLabelDto.labelGroupId;
    await this.labelGroupService.findOne(labelGroupId);
    return await this.labelRepository.create(createLabelDto);
  }

  async findAll() {
    return await this.labelRepository.findAll();
  }

  async findOne(id: string) {
    const label = await this.labelRepository.findOne(id);

    if (!label) {
      throw new NotFoundException('Label not found');
    }
    return label;
  }

  async update(id: string, updateLabelDto: UpdateLabelDto) {
    await this.findOne(id);
    return await this.labelRepository.update(id, updateLabelDto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.labelRepository.remove(id);
  }
}
