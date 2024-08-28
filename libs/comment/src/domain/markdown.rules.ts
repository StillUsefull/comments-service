import {BadRequestException} from "@nestjs/common";

const ALLOWED_TAGS = ['a', 'code', 'i', 'strong'];
const ALLOWED_ATTRIBUTES = {
    'a': ['href', 'title']
};

export const validateTagsAndAttributes = (text: string): void => {
    for (const tag of ALLOWED_TAGS) {
        const openingTagRegex = new RegExp(`<${tag}(\\s+[^>]+)*>`, 'g');
        const closingTagRegex = new RegExp(`</${tag}>`, 'g');

        const openingTags = text.match(openingTagRegex) || [];
        const closingTags = text.match(closingTagRegex) || [];

        if (openingTags.length !== closingTags.length) {
            throw new BadRequestException(`Invalid XHTML: Tag <${tag}> is not properly opened or closed.`);
        }
        if (ALLOWED_ATTRIBUTES[tag]) {
            for (const openingTag of openingTags) {
                const attributesRegex = /(\w+)=["']([^"']*)["']/g;
                let match;
                while ((match = attributesRegex.exec(openingTag)) !== null) {
                    const attrName = match[1];

                    if (!ALLOWED_ATTRIBUTES[tag].includes(attrName)) {
                        throw new BadRequestException(`Invalid attribute "${attrName}" in tag <${tag}>.`);
                    }
                }
            }
        }
    }
};
