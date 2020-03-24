import { IsString, IsNotEmpty } from 'class-validator';

export class GroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
