import {UserRepository} from "@lib/user/providers/user.repository";
import {IUser} from "@lib/user/domain/user.interface";
import {UserAggregate} from "@lib/user/domain/user.aggregate";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "@lib/entities/user.schema";
import {Model} from "mongoose";
import {BadRequestException, ConflictException, NotFoundException} from "@nestjs/common";


export class UserAdapter implements UserRepository {

    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async create(user: IUser): Promise<UserAggregate>{
        const userAggregate = UserAggregate.create(user);
        const createdUser = new this.userModel(userAggregate);
        await createdUser.save().catch((err) => {
            throw new ConflictException(`Username and email must be unique`);
        });
        return userAggregate;
    };

    async update(user: Partial<IUser>): Promise<UserAggregate>{
        if (!user._id){
            throw new BadRequestException('User ID is required for update')
        }
        const existingUser = await this.userModel.findById(user._id).exec();
        if (!existingUser) {
            throw new NotFoundException(`User with ID ${user._id} not found`);
        }
        Object.assign(existingUser, user, { updatedAt: new Date().toISOString() });
        await existingUser.save();

        return UserAggregate.create({...existingUser, _id: existingUser._id.toString()});
    };

    async delete(id: string): Promise<boolean>{
        const result = await this.userModel.deleteOne({_id: id}).exec();
        return result.deletedCount > 0;
    };

    async findOne(query: Partial<IUser>): Promise<UserAggregate> {
        const user = await this.userModel.findOne({...query}).exec();
        if (!user) {
            throw new NotFoundException(`User not found with this credentials`);
        }
        const userObj = user.toObject();
        return UserAggregate.create(userObj);
    }
}