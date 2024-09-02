import { BadRequestException } from '@nestjs/common';

const ALLOWED_TAGS = ['a', 'code', 'i', 'strong'];
const ALLOWED_ATTRIBUTES = {
    'a': ['href', 'title'],
};
const EMPTY_TAG_PATTERN = /<\s*\/?\s*[^>]*\s*\/?\s*>/g;

export const validateTagsAndAttributes = (text: string): void => {

    if (EMPTY_TAG_PATTERN.test(text)) {
        throw new BadRequestException('Text contains invalid empty tags.');
    }

    const tagStack: string[] = [];
    const tagPattern = /<\/?([a-z]+)(\s+[^>]*)?>/gi;

    let match;
    while ((match = tagPattern.exec(text)) !== null) {
        const [fullMatch, tagName] = match;
        const isOpeningTag = fullMatch.startsWith(`<${tagName}`);
        const isClosingTag = fullMatch.startsWith(`</${tagName}`);

        if (!ALLOWED_TAGS.includes(tagName)) {
            throw new BadRequestException(`Invalid tag <${tagName}>.`);
        }

        if (isOpeningTag) {
            if (ALLOWED_ATTRIBUTES[tagName]) {
                const attributesRegex = /(\w+)=["']([^"']*)["']/g;
                let attrMatch;
                while ((attrMatch = attributesRegex.exec(fullMatch)) !== null) {
                    const attrName = attrMatch[1];
                    if (!ALLOWED_ATTRIBUTES[tagName].includes(attrName)) {
                        throw new BadRequestException(`Invalid attribute "${attrName}" in tag <${tagName}>.`);
                    }
                }
            }
            tagStack.push(tagName);
        } else if (isClosingTag) {
            if (tagStack.length === 0 || tagStack[tagStack.length - 1] !== tagName) {
                throw new BadRequestException(`Invalid XHTML: Tag <${tagName}> is not properly nested or closed.`);
            }
            tagStack.pop();
        }
    }

    if (tagStack.length > 0) {
        throw new BadRequestException(`Invalid XHTML: Unmatched tags.`);
    }
};
