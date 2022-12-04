import { Controller, Get } from "@nestjs/common";


@Controller('/tracks')
export class TrackController {
    create() {

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