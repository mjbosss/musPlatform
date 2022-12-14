import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { GetTrackDto } from './dto/get-track.dto';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  @ApiConsumes('multipart/form-data')
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    const { picture, audio } = files;
    return this.trackService.create(dto, picture[0], audio[0]);
  }

  @Get('all')
  getAll(@Query() dto: GetTrackDto) {
    return this.trackService.getAll(dto.count, dto.offset);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  @Post('/listen/:id')
  listen(@Param('id') id: string) {
    return this.trackService.listen(id);
  }
}
