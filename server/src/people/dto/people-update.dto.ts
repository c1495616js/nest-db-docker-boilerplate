import { IsString, IsOptional } from 'class-validator';

export class PeopleUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsOptional()
  address: string;
}
