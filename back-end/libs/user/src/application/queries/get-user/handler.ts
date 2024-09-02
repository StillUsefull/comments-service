import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetUserQuery} from "@lib/user/application/queries/get-user/query";
import {UserAggregate} from "@lib/user/domain";
import {UserRepository} from "@lib/user/providers/user.repository";
import {BadRequestException} from "@nestjs/common";

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery, UserAggregate> {
    constructor(private readonly repository: UserRepository) {
    }
    async execute({user}: GetUserQuery): Promise<UserAggregate>{
        try {
            return this.repository.findOne(user)
        } catch (err){
            throw new BadRequestException(err);
        }
    }
}