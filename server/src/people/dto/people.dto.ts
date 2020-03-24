import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class PeopleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsOptional()
  address: string;
}
