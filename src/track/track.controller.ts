import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
//import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";


@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {   }
     
    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this,this.trackService.create(dto)
    }

    getAll() {

    }
    @Get()
    getOne() {
        return 'stroka'
    }

    delete() {
        
    }
}