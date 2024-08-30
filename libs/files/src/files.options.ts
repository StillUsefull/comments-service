import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { BadRequestException } from '@nestjs/common';

export const multerOptions: MulterOptions = {
    fileFilter: (req, file, callback) => {
        const allowedTypes = /\/(jpg|jpeg|png|gif|plain)$/;
        const mimeType = file.mimetype.match(allowedTypes);

        if (!mimeType) {
            return callback(new BadRequestException('Only image files (JPG, PNG, GIF) or text files (TXT) are allowed!'), false);
        }
        callback(null, true);
    },
    limits: {
        fileSize: 1 * 1024 * 1024,
    }
};
