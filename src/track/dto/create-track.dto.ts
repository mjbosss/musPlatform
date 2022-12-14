import { ApiProperty } from '@nestjs/swagger';

export class CreateTrackDto {
  @ApiProperty({ example: 'Andrey Song', description: 'name' })
  readonly name: string;
  @ApiProperty({ example: 'Andrey Sins', description: 'artist' })
  readonly artist: string;
  @ApiProperty({ example: 'Andrey pesenka speta', description: 'text' })
  readonly text: string;

  @ApiProperty({ type: 'string', format: 'binary', required: true })
  readonly picture: Buffer;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  readonly audio: Buffer;
}
