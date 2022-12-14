import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose"
import { FileModule } from "./file/file.modele";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.jxjn3gs.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}