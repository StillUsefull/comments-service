import { IMimetype } from "@lib/files/interfaces/mimetype.interface";
import { IsNotEmpty, IsString } from "class-validator";


export class GetFileDto implements IMimetype {

    @IsString()
    @IsNotEmpty()
    mimetype: string;

    @IsString()
    @IsNotEmpty()
    extension: string;
}