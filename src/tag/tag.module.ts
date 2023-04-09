import { Module } from "@nestjs/common";
import { tagController } from "./tag.controller";
import { TagService } from "./tag.service";

@Module({
    controllers: [tagController],
    providers: [TagService]
})
export class TagModule {}