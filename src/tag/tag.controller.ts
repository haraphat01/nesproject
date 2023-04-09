import { Controller, Get } from "@nestjs/common";
import { get } from "http";
import { TagService } from "./tag.service";

@Controller('tags')
export class tagController{
    constructor(private readonly tagService: TagService){}
@Get()
findAll(){
    return this.tagService.findAll()
}
}