import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'User', description: 'username' })
  readonly username: string;
  @ApiProperty({ example: 'Comment text', description: 'text' })
  readonly text: string;
  @ApiProperty({ example: 'track-id', description: 'trackId' })
  readonly trackId: string;
}
