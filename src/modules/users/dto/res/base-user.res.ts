import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  bio?: string;

  image?: string;

  createdAt: Date;

  updatedAt: Date;
}
