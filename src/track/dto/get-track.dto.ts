import { ApiProperty } from '@nestjs/swagger';

export class GetTrackDto {
  @ApiProperty({ example: 10, description: 'count', required: false })
  readonly count?: number;
  @ApiProperty({ example: 0, description: 'offset', required: false })
  readonly offset?: number;
}
