import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class QueryUserDto {
  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) =>
    Array.isArray(value) ? value.map((item) => item) : value,
  )
  name: string | string[];

  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) =>
    Array.isArray(value) ? value.map((item) => item) : value,
  )
  userLabels: string | string[];
}
