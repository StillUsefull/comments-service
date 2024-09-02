import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
export const HttpCurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
    },
);

export const GqlCurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const gqlContext = GqlExecutionContext.create(ctx);
        const request = gqlContext.getContext().req;
        return request.user;
    },
);