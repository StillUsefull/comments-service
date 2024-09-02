import {Module, OnModuleInit} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "@lib/entities/user.schema";
import {CommandBus, CqrsModule, EventBus, QueryBus} from "@nestjs/cqrs";
import {USER_COMMAND_HANDLERS} from "@lib/user/application/commands";
import {USER_QUERY_HANDLERS} from "@lib/user/application/queries";
import {USER_EVENTS_HANDLER} from "@lib/user/application/events";
import {UserRepository} from "@lib/user/providers/user.repository";
import {UserAdapter} from "@lib/user/providers/user.adapter";
import {userFacadeFactory} from "@lib/user/application/user-facade.factory";
import {UserFacade} from "@lib/user/application/user.facade";

@Module({
  imports: [CqrsModule, MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  providers: [
      ...USER_COMMAND_HANDLERS,
      ...USER_QUERY_HANDLERS,
      ...USER_EVENTS_HANDLER,
    {
      provide: UserRepository,
      useClass: UserAdapter
    },
    {
      provide: UserFacade,
      inject: [CommandBus, QueryBus, EventBus],
      useFactory: userFacadeFactory
    }
  ],
  exports: [UserFacade],
})
export class UserModule implements OnModuleInit{
  constructor(
      private readonly commandBus: CommandBus,
      private readonly queryBus: QueryBus,
      private readonly eventBus: EventBus
  ) {}

  onModuleInit(): any {
    this.commandBus.register(USER_COMMAND_HANDLERS);
    this.queryBus.register(USER_QUERY_HANDLERS);
    this.eventBus.register(USER_EVENTS_HANDLER);
  }
}
