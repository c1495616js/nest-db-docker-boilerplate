import { IsString, IsOptional } from 'class-validator';
import { GenderEnum } from '../enum/gender.enum';

export class PeopleUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  gender: GenderEnum;

  @IsOptional()
  address: string;
}
