import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track } from "./schema/track.schema";
import { TrackDocument } from "./schema/track.schema";
import { CommentDocument } from "./schema/comment.schema";
import { Model } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>){}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0})
        return track;
    }

    async getAll() {

    }

    async getOne() {

    }

    async delete() {
        
    }
}