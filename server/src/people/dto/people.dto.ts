import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { GenderEnum } from '../enum/gender.enum';

export class PeopleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  gender: GenderEnum;

  @IsOptional()
  address: string;
}
