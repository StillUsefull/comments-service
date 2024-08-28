import { Module } from '@nestjs/common';
import {CqrsModule} from "@nestjs/cqrs";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentEntity} from "@lib/entities";
import {COMMENT_COMMAND_HANDLERS} from "@lib/comment/application/commands";
import {COMMENT_QUERIES_HANDLERS} from "@lib/comment/application/queries";
import {COMMENT_EVENTS_HANDLER} from "@lib/comment/application/events";
import {CommentAdapter, CommentRepository} from "@lib/comment/providers";

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CommentEntity])],
  providers: [
      ...COMMENT_COMMAND_HANDLERS,
      ...COMMENT_QUERIES_HANDLERS,
      ...COMMENT_EVENTS_HANDLER,
    {
      provide: CommentRepository,
      useClass: CommentAdapter
    }
  ],
  exports: [],
})
export class CommentModule {}
