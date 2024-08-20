import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';
import { AgeValid } from '../../decorators/age-valid.decorator';

class CreateCarDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 20)
  public readonly model: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 20)
  public readonly producer: string;
}

export class CreateUserDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(2, 20)
  public readonly name: string;

  @IsString()
  @IsEmail()
  public readonly email: string;

  @Transform(TransformHelper.trim)
  @IsNotIn(['password', 'qwe', '123'])
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Incorrect password',
  })
  public readonly password: string;
  @AgeValid()
  public readonly age: number;

  @Transform(TransformHelper.trim)
  @IsString()
  @ValidateIf((obj) => obj.age === 35)
  @IsOptional()
  public readonly phone?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateCarDto)
  cars: CreateCarDto[];
}
