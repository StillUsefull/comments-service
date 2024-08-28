import {Module, OnModuleInit} from '@nestjs/common';
import {CommandBus, CqrsModule, EventBus, QueryBus} from "@nestjs/cqrs";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentEntity} from "@lib/entities";
import {COMMENT_COMMAND_HANDLERS} from "@lib/comment/application/commands";
import {COMMENT_QUERIES_HANDLERS} from "@lib/comment/application/queries";
import {COMMENT_EVENTS_HANDLER} from "@lib/comment/application/events";
import {CommentAdapter, CommentRepository} from "@lib/comment/providers";
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {commentFacadeFactory} from "@lib/comment/application/comment-facade.factory";

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CommentEntity])],
  providers: [
      ...COMMENT_COMMAND_HANDLERS,
      ...COMMENT_QUERIES_HANDLERS,
      ...COMMENT_EVENTS_HANDLER,
    {
      provide: CommentRepository,
      useClass: CommentAdapter
    },
      {
          provide: CommentFacade,
          inject: [CommandBus, QueryBus, EventBus],
          useFactory: commentFacadeFactory
      }
  ],
  exports: [CommentFacade],
})
export class CommentModule implements OnModuleInit{
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventBus: EventBus
    ) {}

    onModuleInit(): any {
        this.commandBus.register(COMMENT_COMMAND_HANDLERS);
        this.queryBus.register(COMMENT_QUERIES_HANDLERS);
        this.eventBus.register(COMMENT_EVENTS_HANDLER);
    }
}
