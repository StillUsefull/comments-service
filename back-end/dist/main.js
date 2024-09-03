/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const domains_module_1 = __webpack_require__(4);
const http_module_1 = __webpack_require__(86);
const providers_module_1 = __webpack_require__(108);
const config_1 = __webpack_require__(40);
const path_1 = __webpack_require__(76);
const graphql_module_1 = __webpack_require__(119);
const websocket_module_1 = __webpack_require__(132);
const rabbitmq_module_1 = __webpack_require__(133);
const errors_1 = __webpack_require__(139);
const throttler_1 = __webpack_require__(107);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: (0, path_1.join)(process.cwd(), '.env')
            }),
            domains_module_1.DomainsModule,
            http_module_1.HttpModule,
            providers_module_1.ProvidersModule,
            websocket_module_1.WebsocketModule,
            graphql_module_1.GraphqlModule,
            rabbitmq_module_1.RabbitControllersModule,
            errors_1.ErrorsModule,
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 100,
                }]),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainsModule = void 0;
const common_1 = __webpack_require__(3);
const comment_1 = __webpack_require__(5);
const auth_1 = __webpack_require__(43);
const files_1 = __webpack_require__(36);
const user_1 = __webpack_require__(55);
let DomainsModule = class DomainsModule {
};
exports.DomainsModule = DomainsModule;
exports.DomainsModule = DomainsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [comment_1.CommentModule, auth_1.AuthModule, files_1.FilesModule, user_1.UserModule],
        exports: [comment_1.CommentModule, auth_1.AuthModule, files_1.FilesModule, user_1.UserModule]
    })
], DomainsModule);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6), exports);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentModule = void 0;
const common_1 = __webpack_require__(3);
const cqrs_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(8);
const entities_1 = __webpack_require__(9);
const commands_1 = __webpack_require__(12);
const queries_1 = __webpack_require__(29);
const events_1 = __webpack_require__(34);
const providers_1 = __webpack_require__(21);
const comment_facade_1 = __webpack_require__(41);
const comment_facade_factory_1 = __webpack_require__(42);
let CommentModule = class CommentModule {
    constructor(commandBus, queryBus, eventBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.eventBus = eventBus;
    }
    onModuleInit() {
        this.commandBus.register(commands_1.COMMENT_COMMAND_HANDLERS);
        this.queryBus.register(queries_1.COMMENT_QUERIES_HANDLERS);
        this.eventBus.register(events_1.COMMENT_EVENTS_HANDLER);
    }
};
exports.CommentModule = CommentModule;
exports.CommentModule = CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, typeorm_1.TypeOrmModule.forFeature([entities_1.CommentEntity])],
        providers: [
            ...commands_1.COMMENT_COMMAND_HANDLERS,
            ...queries_1.COMMENT_QUERIES_HANDLERS,
            ...events_1.COMMENT_EVENTS_HANDLER,
            {
                provide: providers_1.CommentRepository,
                useClass: providers_1.CommentAdapter
            },
            {
                provide: comment_facade_1.CommentFacade,
                inject: [cqrs_1.CommandBus, cqrs_1.QueryBus, cqrs_1.EventBus],
                useFactory: comment_facade_factory_1.commentFacadeFactory
            }
        ],
        exports: [comment_facade_1.CommentFacade],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _c : Object])
], CommentModule);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(10), exports);


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentEntity = void 0;
const typeorm_1 = __webpack_require__(11);
let CommentEntity = class CommentEntity {
};
exports.CommentEntity = CommentEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_name' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommentEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'home_page', nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "homepage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommentEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'post_id' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], CommentEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", CommentEntity)
], CommentEntity.prototype, "parent", void 0);
exports.CommentEntity = CommentEntity = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)('materialized-path')
], CommentEntity);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMENT_COMMAND_HANDLERS = void 0;
const handler_1 = __webpack_require__(13);
const handler_2 = __webpack_require__(24);
const handler_3 = __webpack_require__(26);
exports.COMMENT_COMMAND_HANDLERS = [
    handler_1.CreateCommentHandler,
    handler_2.UpdateCommentHandler,
    handler_3.DeleteCommentHandler
];


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCommentHandler = void 0;
const command_1 = __webpack_require__(14);
const cqrs_1 = __webpack_require__(7);
const domain_1 = __webpack_require__(15);
const providers_1 = __webpack_require__(21);
const common_1 = __webpack_require__(3);
let CreateCommentHandler = class CreateCommentHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ comment }) {
        const aggregate = domain_1.CommentAggregate.create(comment);
        try {
            const comment = await this.repository.create(aggregate);
            return comment;
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.CreateCommentHandler = CreateCommentHandler;
exports.CreateCommentHandler = CreateCommentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(command_1.CreateCommentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof providers_1.CommentRepository !== "undefined" && providers_1.CommentRepository) === "function" ? _a : Object])
], CreateCommentHandler);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCommentCommand = void 0;
class CreateCommentCommand {
    constructor(comment) {
        this.comment = comment;
    }
}
exports.CreateCommentCommand = CreateCommentCommand;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentAggregate = void 0;
const class_validator_1 = __webpack_require__(18);
const common_1 = __webpack_require__(3);
const markdown_rules_1 = __webpack_require__(19);
const uuid_1 = __webpack_require__(20);
class CommentAggregate {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
        this.children = [];
    }
    static create(comment) {
        const _comment = new CommentAggregate();
        Object.assign(_comment, comment);
        _comment.updatedAt = _comment?.id ? new Date().toISOString() : _comment.updatedAt;
        const errors = (0, class_validator_1.validateSync)(_comment);
        if (!!errors.length) {
            throw new common_1.BadRequestException('Comment not valid');
        }
        (0, markdown_rules_1.validateTagsAndAttributes)(_comment.text);
        return _comment;
    }
}
exports.CommentAggregate = CommentAggregate;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "homepage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommentAggregate.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CommentAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CommentAggregate.prototype, "updatedAt", void 0);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateTagsAndAttributes = void 0;
const common_1 = __webpack_require__(3);
const ALLOWED_TAGS = ['a', 'code', 'i', 'strong'];
const ALLOWED_ATTRIBUTES = {
    'a': ['href', 'title'],
};
const EMPTY_TAG_PATTERN = /<\s*\/?\s*[^>]*\s*\/?\s*>/g;
const validateTagsAndAttributes = (text) => {
    if (EMPTY_TAG_PATTERN.test(text)) {
        throw new common_1.BadRequestException('Text contains invalid empty tags.');
    }
    const tagStack = [];
    const tagPattern = /<\/?([a-z]+)(\s+[^>]*)?>/gi;
    let match;
    while ((match = tagPattern.exec(text)) !== null) {
        const [fullMatch, tagName] = match;
        const isOpeningTag = fullMatch.startsWith(`<${tagName}`);
        const isClosingTag = fullMatch.startsWith(`</${tagName}`);
        if (!ALLOWED_TAGS.includes(tagName)) {
            throw new common_1.BadRequestException(`Invalid tag <${tagName}>.`);
        }
        if (isOpeningTag) {
            if (ALLOWED_ATTRIBUTES[tagName]) {
                const attributesRegex = /(\w+)=["']([^"']*)["']/g;
                let attrMatch;
                while ((attrMatch = attributesRegex.exec(fullMatch)) !== null) {
                    const attrName = attrMatch[1];
                    if (!ALLOWED_ATTRIBUTES[tagName].includes(attrName)) {
                        throw new common_1.BadRequestException(`Invalid attribute "${attrName}" in tag <${tagName}>.`);
                    }
                }
            }
            tagStack.push(tagName);
        }
        else if (isClosingTag) {
            if (tagStack.length === 0 || tagStack[tagStack.length - 1] !== tagName) {
                throw new common_1.BadRequestException(`Invalid XHTML: Tag <${tagName}> is not properly nested or closed.`);
            }
            tagStack.pop();
        }
    }
    if (tagStack.length > 0) {
        throw new common_1.BadRequestException(`Invalid XHTML: Unmatched tags.`);
    }
};
exports.validateTagsAndAttributes = validateTagsAndAttributes;


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentRepository = void 0;
class CommentRepository {
}
exports.CommentRepository = CommentRepository;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentAdapter = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(8);
const entities_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(11);
const domain_1 = __webpack_require__(15);
let CommentAdapter = class CommentAdapter {
    constructor(repository) {
        this.repository = repository;
    }
    async create(comment) {
        const { parentComment, ...createObject } = comment;
        let parent;
        if (parentComment) {
            parent = await this.repository.findOne({ where: { id: parentComment } });
            if (!parent) {
                throw new common_1.BadRequestException('Parent comment not found');
            }
        }
        const savedComment = this.repository.create({
            ...createObject,
            parent,
        });
        await this.repository.save(savedComment);
        return domain_1.CommentAggregate.create(savedComment);
    }
    async update(comment) {
        const { id, ...updateObject } = comment;
        if (!id) {
            throw new common_1.BadRequestException('Comment ID is required for update');
        }
        const existingComment = await this.findOne(id);
        if (!existingComment) {
            throw new common_1.BadRequestException('Comment not found');
        }
        await this.repository.update({ id }, updateObject);
        return this.findOne(id);
    }
    async delete(id) {
        const comment = await this.repository.findOne({ where: { id } });
        if (!comment) {
            throw new common_1.BadRequestException('Comment not found');
        }
        const commentsToDelete = await this.repository.findDescendants(comment);
        const photos = commentsToDelete
            .map(comment => comment.photo)
            .filter(photo => !!photo);
        await this.repository.remove(commentsToDelete);
        return photos;
    }
    async findAll(postId, pagination) {
        const { offset, limit } = pagination;
        const rootComments = await this.repository.find({
            where: { postId, parent: (0, typeorm_2.IsNull)() },
            skip: offset,
            take: limit + 1,
            order: { updatedAt: 'DESC' },
        });
        const hasMore = rootComments.length > limit;
        if (hasMore) {
            rootComments.pop();
        }
        const trees = await Promise.all(rootComments.map(rootComment => this.repository.findDescendantsTree(rootComment)));
        return {
            comments: trees.map(tree => domain_1.CommentAggregate.create(tree)),
            hasMore,
        };
    }
    async findOne(id) {
        const comment = await this.repository.findOne({ where: { id } });
        if (!comment) {
            return null;
        }
        const tree = await this.repository.findDescendantsTree(comment);
        return domain_1.CommentAggregate.create(tree);
    }
};
exports.CommentAdapter = CommentAdapter;
exports.CommentAdapter = CommentAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.CommentEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.TreeRepository !== "undefined" && typeorm_2.TreeRepository) === "function" ? _a : Object])
], CommentAdapter);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommentHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const command_1 = __webpack_require__(25);
const providers_1 = __webpack_require__(21);
const common_1 = __webpack_require__(3);
let UpdateCommentHandler = class UpdateCommentHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ comment }) {
        const _comment = await this.repository.findOne(comment.id);
        if (!_comment) {
            throw new common_1.NotFoundException('Can not find this comment');
        }
        try {
            return this.repository.update(comment);
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.UpdateCommentHandler = UpdateCommentHandler;
exports.UpdateCommentHandler = UpdateCommentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(command_1.UpdateCommentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof providers_1.CommentRepository !== "undefined" && providers_1.CommentRepository) === "function" ? _a : Object])
], UpdateCommentHandler);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommentCommand = void 0;
class UpdateCommentCommand {
    constructor(comment) {
        this.comment = comment;
    }
}
exports.UpdateCommentCommand = UpdateCommentCommand;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteCommentHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const providers_1 = __webpack_require__(21);
const command_1 = __webpack_require__(27);
const event_1 = __webpack_require__(28);
let DeleteCommentHandler = class DeleteCommentHandler {
    constructor(commentRepository, eventBus) {
        this.commentRepository = commentRepository;
        this.eventBus = eventBus;
    }
    async execute({ id }) {
        const keys = await this.commentRepository.delete(id);
        if (keys) {
            await this.eventBus.publish(new event_1.CommentDeletedEvent(keys));
        }
        return true;
    }
};
exports.DeleteCommentHandler = DeleteCommentHandler;
exports.DeleteCommentHandler = DeleteCommentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(command_1.DeleteCommentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof providers_1.CommentRepository !== "undefined" && providers_1.CommentRepository) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _b : Object])
], DeleteCommentHandler);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteCommentCommand = void 0;
class DeleteCommentCommand {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteCommentCommand = DeleteCommentCommand;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentDeletedEvent = void 0;
class CommentDeletedEvent {
    constructor(photoKeys) {
        this.photoKeys = photoKeys;
    }
}
exports.CommentDeletedEvent = CommentDeletedEvent;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMENT_QUERIES_HANDLERS = void 0;
const handler_1 = __webpack_require__(30);
const handler_2 = __webpack_require__(32);
exports.COMMENT_QUERIES_HANDLERS = [
    handler_1.GetCommentsHandler,
    handler_2.GetCommentHandler
];


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCommentsHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const providers_1 = __webpack_require__(21);
const query_1 = __webpack_require__(31);
const common_1 = __webpack_require__(3);
let GetCommentsHandler = class GetCommentsHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ postId, pagination }) {
        try {
            return this.repository.findAll(postId, pagination);
        }
        catch (err) {
            throw new common_1.NotFoundException(`Can not find any comment to post with id ${postId}`);
        }
    }
};
exports.GetCommentsHandler = GetCommentsHandler;
exports.GetCommentsHandler = GetCommentsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(query_1.GetCommentsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof providers_1.CommentRepository !== "undefined" && providers_1.CommentRepository) === "function" ? _a : Object])
], GetCommentsHandler);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCommentsQuery = void 0;
class GetCommentsQuery {
    constructor(postId, pagination) {
        this.postId = postId;
        this.pagination = pagination;
    }
}
exports.GetCommentsQuery = GetCommentsQuery;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCommentHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const query_1 = __webpack_require__(33);
const providers_1 = __webpack_require__(21);
const common_1 = __webpack_require__(3);
let GetCommentHandler = class GetCommentHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ id }) {
        try {
            const comment = await this.repository.findOne(id);
            return comment;
        }
        catch (err) {
            throw new common_1.NotFoundException(`Can not find this comment`);
        }
    }
};
exports.GetCommentHandler = GetCommentHandler;
exports.GetCommentHandler = GetCommentHandler = __decorate([
    (0, cqrs_1.QueryHandler)(query_1.GetCommentQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof providers_1.CommentRepository !== "undefined" && providers_1.CommentRepository) === "function" ? _a : Object])
], GetCommentHandler);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCommentQuery = void 0;
class GetCommentQuery {
    constructor(id) {
        this.id = id;
    }
}
exports.GetCommentQuery = GetCommentQuery;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMENT_EVENTS_HANDLER = void 0;
const handler_1 = __webpack_require__(35);
exports.COMMENT_EVENTS_HANDLER = [
    handler_1.CommentDeletedHandler
];


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentDeletedHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const event_1 = __webpack_require__(28);
const files_1 = __webpack_require__(36);
let CommentDeletedHandler = class CommentDeletedHandler {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async handle({ photoKeys }) {
        if (photoKeys) {
            await this.fileService.deletePhoto(photoKeys);
        }
    }
};
exports.CommentDeletedHandler = CommentDeletedHandler;
exports.CommentDeletedHandler = CommentDeletedHandler = __decorate([
    (0, cqrs_1.EventsHandler)(event_1.CommentDeletedEvent),
    __metadata("design:paramtypes", [typeof (_a = typeof files_1.FilesService !== "undefined" && files_1.FilesService) === "function" ? _a : Object])
], CommentDeletedHandler);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesModule = void 0;
const common_1 = __webpack_require__(3);
const files_service_1 = __webpack_require__(38);
let FilesModule = class FilesModule {
};
exports.FilesModule = FilesModule;
exports.FilesModule = FilesModule = __decorate([
    (0, common_1.Module)({
        providers: [files_service_1.FilesService],
        exports: [files_service_1.FilesService],
    })
], FilesModule);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesService = void 0;
const common_1 = __webpack_require__(3);
const AWS = __webpack_require__(39);
const config_1 = __webpack_require__(40);
const uuid_1 = __webpack_require__(20);
let FilesService = class FilesService {
    constructor(configService) {
        this.configService = configService;
        this.s3 = new AWS.S3();
        AWS.config.update({
            accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
            region: this.configService.get('AWS_REGION'),
        });
    }
    async generatePresignedUrl(mimetype) {
        const validMimeTypes = {
            'image/jpeg': ['jpg', 'jpeg'],
            'image/gif': ['gif'],
            'image/png': ['png'],
            'text/plain': ['txt'],
        };
        if (!validMimeTypes[mimetype.mimetype] || !validMimeTypes[mimetype.mimetype].includes(mimetype.extension)) {
            throw new common_1.BadRequestException('Invalid MIME type or extension');
        }
        const fileName = `${(0, uuid_1.v4)()}.${mimetype.extension}`;
        const params = {
            Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
            Key: fileName,
            Expires: 60 * 5,
            'ACL': 'public-read',
            ContentType: mimetype.mimetype,
        };
        try {
            const url = await this.s3.getSignedUrlPromise('putObject', params);
            return { url, fileName };
        }
        catch (error) {
            console.error('Error generating presigned URL', error);
            throw new common_1.InternalServerErrorException('Error generating presigned URL');
        }
    }
    async deletePhoto(keys) {
        const params = {
            Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
            Delete: {
                Objects: keys.map(key => ({ Key: key })),
                Quiet: false,
            }
        };
        await this.s3.deleteObjects(params).promise().catch(err => {
            throw new common_1.BadRequestException('Error deleting file');
        });
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], FilesService);


/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentFacade = void 0;
const common_1 = __webpack_require__(3);
const cqrs_1 = __webpack_require__(7);
const command_1 = __webpack_require__(14);
const command_2 = __webpack_require__(25);
const query_1 = __webpack_require__(31);
const query_2 = __webpack_require__(33);
const command_3 = __webpack_require__(27);
let CommentFacade = class CommentFacade {
    constructor(commandBus, queryBus, eventsBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.eventsBus = eventsBus;
    }
    createComment(comment) {
        return this.commandBus.execute(new command_1.CreateCommentCommand(comment));
    }
    updateComment(comment) {
        return this.commandBus.execute(new command_2.UpdateCommentCommand(comment));
    }
    deleteComment(id) {
        return this.commandBus.execute(new command_3.DeleteCommentCommand(id));
    }
    getComments(postId, pagination) {
        return this.queryBus.execute(new query_1.GetCommentsQuery(postId, pagination));
    }
    getComment(id) {
        return this.queryBus.execute(new query_2.GetCommentQuery(id));
    }
};
exports.CommentFacade = CommentFacade;
exports.CommentFacade = CommentFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _c : Object])
], CommentFacade);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commentFacadeFactory = void 0;
const comment_facade_1 = __webpack_require__(41);
const commentFacadeFactory = (commandBus, queryBus, eventBus) => new comment_facade_1.CommentFacade(commandBus, queryBus, eventBus);
exports.commentFacadeFactory = commentFacadeFactory;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(45);
const user_1 = __webpack_require__(55);
const passport_1 = __webpack_require__(73);
const jwt_1 = __webpack_require__(51);
const config_1 = __webpack_require__(74);
const jwt_guard_1 = __webpack_require__(78);
const strategies_1 = __webpack_require__(83);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_1.UserModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register(config_1.jwtConfig)
        ],
        providers: [auth_service_1.AuthService, strategies_1.JwtStrategy, jwt_guard_1.JwtGuard],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const user_facade_1 = __webpack_require__(46);
const jwt_1 = __webpack_require__(51);
const cache_manager_1 = __webpack_require__(52);
const uuid_1 = __webpack_require__(20);
const config_1 = __webpack_require__(40);
const utils_1 = __webpack_require__(53);
let AuthService = class AuthService {
    constructor(configService, userFacade, jwtService, cacheManager) {
        this.configService = configService;
        this.userFacade = userFacade;
        this.jwtService = jwtService;
        this.cacheManager = cacheManager;
    }
    async register(user) {
        return this.userFacade.createUser(user);
    }
    async login(user, userAgent) {
        const _user = await this.userFacade.getUser(user);
        if (!_user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const sessionId = (0, uuid_1.v4)();
        const ttl = this.configService.get('JWT_TTL');
        const payload = { sub: sessionId, userAgent };
        const token = this.jwtService.sign(payload);
        await this.cacheManager.set(sessionId, {
            username: _user.username,
            email: _user.email,
            userId: _user._id,
            userAgent,
        }, (0, utils_1.convertTimeToMilliseconds)(ttl));
        return { token, userId: _user._id };
    }
    async validateUser({ sub, userAgent }) {
        const cachePayload = await this.cacheManager.get(sub);
        if (!cachePayload) {
            throw new common_1.UnauthorizedException('Session not found or expired');
        }
        if (userAgent !== cachePayload.userAgent) {
            await this.cacheManager.del(sub);
            throw new common_1.UnauthorizedException('Invalid user agent');
        }
        return true;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof user_facade_1.UserFacade !== "undefined" && user_facade_1.UserFacade) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _d : Object])
], AuthService);


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserFacade = void 0;
const cqrs_1 = __webpack_require__(7);
const common_1 = __webpack_require__(3);
const command_1 = __webpack_require__(47);
const command_2 = __webpack_require__(48);
const command_3 = __webpack_require__(49);
const query_1 = __webpack_require__(50);
let UserFacade = class UserFacade {
    constructor(commandBus, queryBus, eventsBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.eventsBus = eventsBus;
    }
    createUser(user) {
        return this.commandBus.execute(new command_1.CreateUserCommand(user));
    }
    updateUser(user) {
        return this.commandBus.execute(new command_2.UpdateUserCommand(user));
    }
    deleteUser(id) {
        return this.commandBus.execute(new command_3.DeleteUserCommand(id));
    }
    getUser(user) {
        return this.queryBus.execute(new query_1.GetUserQuery(user));
    }
};
exports.UserFacade = UserFacade;
exports.UserFacade = UserFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _c : Object])
], UserFacade);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserCommand = void 0;
class CreateUserCommand {
    constructor(user) {
        this.user = user;
    }
}
exports.CreateUserCommand = CreateUserCommand;


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserCommand = void 0;
class UpdateUserCommand {
    constructor(user) {
        this.user = user;
    }
}
exports.UpdateUserCommand = UpdateUserCommand;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteUserCommand = void 0;
class DeleteUserCommand {
    constructor(id) {
        this.id = id;
    }
}
exports.DeleteUserCommand = DeleteUserCommand;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUserQuery = void 0;
class GetUserQuery {
    constructor(user) {
        this.user = user;
    }
}
exports.GetUserQuery = GetUserQuery;


/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertTimeToMilliseconds = convertTimeToMilliseconds;
function convertTimeToMilliseconds(stringTime) {
    if (!isNaN(stringTime)) {
        return parseInt(stringTime);
    }
    let modifier;
    if (stringTime && typeof stringTime === 'string') {
        switch (stringTime[stringTime.length - 1]) {
            case 's':
                modifier = 1;
                break;
            case 'm':
                modifier = 60;
                break;
            case 'h':
                modifier = 60 * 60;
                break;
            case 'd':
                modifier = 24 * 60 * 60;
                break;
            case 'M':
                modifier = 30 * 24 * 60 * 60;
                break;
            case 'y':
                modifier = 365 * 24 * 60 * 60;
                break;
            default:
                throw new Error('Invalid time string');
        }
        const time = parseInt(stringTime.slice(0, -1));
        return time * modifier * 1000;
    }
}


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(57);
const user_schema_1 = __webpack_require__(58);
const cqrs_1 = __webpack_require__(7);
const commands_1 = __webpack_require__(59);
const queries_1 = __webpack_require__(67);
const events_1 = __webpack_require__(69);
const user_repository_1 = __webpack_require__(64);
const user_adapter_1 = __webpack_require__(70);
const user_facade_factory_1 = __webpack_require__(72);
const user_facade_1 = __webpack_require__(46);
let UserModule = class UserModule {
    constructor(commandBus, queryBus, eventBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.eventBus = eventBus;
    }
    onModuleInit() {
        this.commandBus.register(commands_1.USER_COMMAND_HANDLERS);
        this.queryBus.register(queries_1.USER_QUERY_HANDLERS);
        this.eventBus.register(events_1.USER_EVENTS_HANDLER);
    }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }])],
        providers: [
            ...commands_1.USER_COMMAND_HANDLERS,
            ...queries_1.USER_QUERY_HANDLERS,
            ...events_1.USER_EVENTS_HANDLER,
            {
                provide: user_repository_1.UserRepository,
                useClass: user_adapter_1.UserAdapter
            },
            {
                provide: user_facade_1.UserFacade,
                inject: [cqrs_1.CommandBus, cqrs_1.QueryBus, cqrs_1.EventBus],
                useFactory: user_facade_factory_1.userFacadeFactory
            }
        ],
        exports: [user_facade_1.UserFacade],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _c : Object])
], UserModule);


/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(57);
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ type: String, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_COMMAND_HANDLERS = void 0;
const handler_1 = __webpack_require__(60);
const handler_2 = __webpack_require__(65);
const handler_3 = __webpack_require__(66);
exports.USER_COMMAND_HANDLERS = [
    handler_1.CreateUserHandler,
    handler_2.UpdateUserHandler,
    handler_3.DeleteUserHandler
];


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const command_1 = __webpack_require__(47);
const domain_1 = __webpack_require__(61);
const user_repository_1 = __webpack_require__(64);
const common_1 = __webpack_require__(3);
let CreateUserHandler = class CreateUserHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ user }) {
        const aggregate = domain_1.UserAggregate.create(user);
        try {
            return this.repository.create(aggregate);
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.CreateUserHandler = CreateUserHandler;
exports.CreateUserHandler = CreateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(command_1.CreateUserCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], CreateUserHandler);


/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(62), exports);
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAggregate = void 0;
const class_validator_1 = __webpack_require__(18);
const common_1 = __webpack_require__(3);
class UserAggregate {
    constructor() {
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
    static create(user) {
        const plainUser = user.toObject ? user.toObject() : user;
        const _user = new UserAggregate();
        Object.assign(_user, plainUser);
        _user.updatedAt = _user._id ? new Date().toISOString() : _user.updatedAt;
        const errors = (0, class_validator_1.validateSync)(_user);
        if (errors.length) {
            throw new common_1.BadRequestException('User data not valid');
        }
        return _user;
    }
}
exports.UserAggregate = UserAggregate;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserAggregate.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserAggregate.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserAggregate.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserAggregate.prototype, "updatedAt", void 0);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
class UserRepository {
}
exports.UserRepository = UserRepository;


/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const command_1 = __webpack_require__(48);
const domain_1 = __webpack_require__(61);
const user_repository_1 = __webpack_require__(64);
const common_1 = __webpack_require__(3);
let UpdateUserHandler = class UpdateUserHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ user }) {
        const aggregate = domain_1.UserAggregate.create(user);
        try {
            return this.repository.update(aggregate);
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.UpdateUserHandler = UpdateUserHandler;
exports.UpdateUserHandler = UpdateUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(command_1.UpdateUserCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], UpdateUserHandler);


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteUserHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const command_1 = __webpack_require__(49);
const user_repository_1 = __webpack_require__(64);
const common_1 = __webpack_require__(3);
let DeleteUserHandler = class DeleteUserHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ id }) {
        try {
            return this.repository.delete(id);
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.DeleteUserHandler = DeleteUserHandler;
exports.DeleteUserHandler = DeleteUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(command_1.DeleteUserCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], DeleteUserHandler);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_QUERY_HANDLERS = void 0;
const handler_1 = __webpack_require__(68);
exports.USER_QUERY_HANDLERS = [
    handler_1.GetUserHandler
];


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUserHandler = void 0;
const cqrs_1 = __webpack_require__(7);
const query_1 = __webpack_require__(50);
const user_repository_1 = __webpack_require__(64);
const common_1 = __webpack_require__(3);
let GetUserHandler = class GetUserHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ user }) {
        try {
            return this.repository.findOne(user);
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.GetUserHandler = GetUserHandler;
exports.GetUserHandler = GetUserHandler = __decorate([
    (0, cqrs_1.QueryHandler)(query_1.GetUserQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], GetUserHandler);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_EVENTS_HANDLER = void 0;
exports.USER_EVENTS_HANDLER = [];


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAdapter = void 0;
const user_aggregate_1 = __webpack_require__(63);
const mongoose_1 = __webpack_require__(57);
const user_schema_1 = __webpack_require__(58);
const mongoose_2 = __webpack_require__(71);
const common_1 = __webpack_require__(3);
let UserAdapter = class UserAdapter {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(user) {
        const userAggregate = user_aggregate_1.UserAggregate.create(user);
        const createdUser = new this.userModel(userAggregate);
        await createdUser.save().catch((err) => {
            throw new common_1.ConflictException(`Username and email must be unique`);
        });
        return userAggregate;
    }
    ;
    async update(user) {
        if (!user._id) {
            throw new common_1.BadRequestException('User ID is required for update');
        }
        const existingUser = await this.userModel.findById(user._id).exec();
        if (!existingUser) {
            throw new common_1.NotFoundException(`User with ID ${user._id} not found`);
        }
        Object.assign(existingUser, user, { updatedAt: new Date().toISOString() });
        await existingUser.save();
        return user_aggregate_1.UserAggregate.create({ ...existingUser, _id: existingUser._id.toString() });
    }
    ;
    async delete(id) {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        return result.deletedCount > 0;
    }
    ;
    async findOne(query) {
        const user = await this.userModel.findOne({ ...query }).exec();
        if (!user) {
            throw new common_1.NotFoundException(`User not found with this credentials`);
        }
        const userObj = user.toObject();
        return user_aggregate_1.UserAggregate.create(userObj);
    }
};
exports.UserAdapter = UserAdapter;
exports.UserAdapter = UserAdapter = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserAdapter);


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userFacadeFactory = void 0;
const user_facade_1 = __webpack_require__(46);
const userFacadeFactory = (commandBus, queryBus, eventBus) => new user_facade_1.UserFacade(commandBus, queryBus, eventBus);
exports.userFacadeFactory = userFacadeFactory;


/***/ }),
/* 73 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConfig = void 0;
const config_1 = __webpack_require__(40);
const path_1 = __webpack_require__(76);
const dotenv_1 = __webpack_require__(77);
(0, dotenv_1.config)({ path: (0, path_1.join)(process.cwd(), '.env') });
const configService = new config_1.ConfigService();
exports.jwtConfig = {
    secret: configService.get('JWT_SECRET') || 'default_secret',
    signOptions: {
        expiresIn: configService.get('JWT_TTL') || '1d',
    },
};


/***/ }),
/* 76 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 77 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuard = void 0;
const common_1 = __webpack_require__(3);
const core_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(73);
const decorators_1 = __webpack_require__(79);
let JwtGuard = class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const _isPublic = (0, decorators_1.isPublic)(context, this.reflector);
        if (_isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtGuard);


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlCurrentUser = exports.HttpCurrentUser = void 0;
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(81);
exports.HttpCurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});
exports.GqlCurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const gqlContext = graphql_1.GqlExecutionContext.create(ctx);
    const request = gqlContext.getContext().req;
    return request.user;
});


/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isPublic = exports.Public = exports.PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(3);
exports.PUBLIC_KEY = 'public';
const Public = () => (0, common_1.SetMetadata)(exports.PUBLIC_KEY, true);
exports.Public = Public;
const isPublic = (ctx, reflector) => {
    const isPublic = reflector.getAllAndOverride(exports.PUBLIC_KEY, [
        ctx.getHandler(),
        ctx.getClass(),
    ]);
    return isPublic;
};
exports.isPublic = isPublic;


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__(73);
const passport_jwt_1 = __webpack_require__(85);
const auth_service_1 = __webpack_require__(45);
const config_1 = __webpack_require__(40);
const common_1 = __webpack_require__(3);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET')
        });
        this.configService = configService;
        this.authService = authService;
    }
    async validate(payload) {
        await this.authService.validateUser(payload);
        return payload;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpModule = void 0;
const common_1 = __webpack_require__(3);
const controllers_1 = __webpack_require__(87);
let HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule;
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        controllers: [...controllers_1.CONTROLLERS]
    })
], HttpModule);


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTROLLERS = void 0;
const auth_controller_1 = __webpack_require__(88);
const comment_controller_1 = __webpack_require__(92);
const file_controller_1 = __webpack_require__(105);
exports.CONTROLLERS = [
    auth_controller_1.AuthController,
    comment_controller_1.CommentController,
    file_controller_1.FileController
];


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const auth_1 = __webpack_require__(43);
const common_1 = __webpack_require__(3);
const dtos_1 = __webpack_require__(89);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async registerUser(user) {
        await this.authService.register(user);
        return {
            message: 'User successfully registered'
        };
    }
    async loginUser(user, request) {
        const userAgent = request.headers['user-agent'] || 'unknown';
        const { token, userId } = await this.authService.login(user, userAgent);
        return {
            message: 'Login successful',
            token,
            wsId: userId
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.RegisterUserDto !== "undefined" && dtos_1.RegisterUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.LoginUserDto !== "undefined" && dtos_1.LoginUserDto) === "function" ? _c : Object, typeof (_d = typeof Request !== "undefined" && Request) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.AuthService !== "undefined" && auth_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserDto = void 0;
const class_validator_1 = __webpack_require__(18);
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterUserDto = void 0;
const class_validator_1 = __webpack_require__(18);
class RegisterUserDto {
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentController = void 0;
const common_1 = __webpack_require__(3);
const comment_facade_1 = __webpack_require__(41);
const dtos_1 = __webpack_require__(93);
const jwt_guard_1 = __webpack_require__(78);
const decorators_1 = __webpack_require__(79);
const cache_manager_1 = __webpack_require__(52);
const interfaces_1 = __webpack_require__(96);
const user_facade_1 = __webpack_require__(46);
const websocket_gateway_1 = __webpack_require__(99);
const comment_response_1 = __webpack_require__(102);
const class_transformer_1 = __webpack_require__(103);
const config_1 = __webpack_require__(40);
const pagination_dto_1 = __webpack_require__(104);
let CommentController = class CommentController {
    constructor(commentFacade, userFacade, cacheManager, websocketGateway, configService) {
        this.commentFacade = commentFacade;
        this.userFacade = userFacade;
        this.cacheManager = cacheManager;
        this.websocketGateway = websocketGateway;
        this.configService = configService;
    }
    async create(comment, postId, user) {
        const { userId, username, email } = await this.cacheManager.get(user.sub);
        if (comment?.photo) {
            comment.photo = `${this.configService.get('AWS_BASE_URL')}${comment.photo}`;
        }
        const _comment = await this.commentFacade.createComment({ ...comment, postId, username, email, userId });
        if (comment.parentComment) {
            const _parentComment = await this.commentFacade.getComment(comment.parentComment);
            const sendNotificationParams = {
                wsId: _parentComment.userId,
                message: _comment.text,
            };
            await this.websocketGateway.sendReplyNotification(sendNotificationParams);
        }
        return (0, class_transformer_1.plainToClass)(comment_response_1.CommentResponseDto, _comment);
    }
    async update(comment, id, user) {
        const _comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new common_1.NotFoundException('Cannot find any comment');
        }
        const { username, email } = await this.cacheManager.get(user.sub);
        if (_comment.email !== email || _comment.username !== username) {
            throw new common_1.UnauthorizedException('You can not update comments of other people');
        }
        return this.commentFacade.updateComment({ ...comment, id });
    }
    async delete(id, user) {
        const comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new common_1.NotFoundException('Cannot find any comment');
        }
        const { username, email } = await this.cacheManager.get(user.sub);
        if (comment.email !== email || comment.username !== username) {
            throw new common_1.UnauthorizedException('You can not delete comments of other people');
        }
        await this.commentFacade.deleteComment(id);
        return 'Comments were deleted successfully';
    }
    async getAll(postId, query) {
        const pagination = (0, class_transformer_1.plainToInstance)(pagination_dto_1.PaginationDto, query);
        const { comments, hasMore } = await this.commentFacade.getComments(postId, pagination);
        const _comments = (0, class_transformer_1.plainToClass)(comment_response_1.CommentResponseDto, comments, { excludeExtraneousValues: true });
        return { comments: _comments, hasMore };
    }
    getOne(id) {
        return this.commentFacade.getComment(id);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Post)('/:postId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('postId')),
    __param(2, (0, decorators_1.HttpCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dtos_1.CreateCommentDto !== "undefined" && dtos_1.CreateCommentDto) === "function" ? _f : Object, String, typeof (_g = typeof interfaces_1.ICurrentUser !== "undefined" && interfaces_1.ICurrentUser) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, decorators_1.HttpCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof dtos_1.UpdateCommentDto !== "undefined" && dtos_1.UpdateCommentDto) === "function" ? _h : Object, String, typeof (_j = typeof interfaces_1.ICurrentUser !== "undefined" && interfaces_1.ICurrentUser) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.HttpCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_k = typeof interfaces_1.ICurrentUser !== "undefined" && interfaces_1.ICurrentUser) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "delete", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/:postId'),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_l = typeof pagination_dto_1.PaginationDto !== "undefined" && pagination_dto_1.PaginationDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getAll", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "getOne", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('comment'),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof comment_facade_1.CommentFacade !== "undefined" && comment_facade_1.CommentFacade) === "function" ? _a : Object, typeof (_b = typeof user_facade_1.UserFacade !== "undefined" && user_facade_1.UserFacade) === "function" ? _b : Object, typeof (_c = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _c : Object, typeof (_d = typeof websocket_gateway_1.WebsocketGateway !== "undefined" && websocket_gateway_1.WebsocketGateway) === "function" ? _d : Object, typeof (_e = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _e : Object])
], CommentController);


/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCommentDto = void 0;
const class_validator_1 = __webpack_require__(18);
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "homepage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "parentComment", void 0);


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommentDto = void 0;
const class_validator_1 = __webpack_require__(18);
class UpdateCommentDto {
}
exports.UpdateCommentDto = UpdateCommentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateCommentDto.prototype, "homepage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCommentDto.prototype, "text", void 0);


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(97), exports);
__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebsocketGateway = void 0;
const common_1 = __webpack_require__(3);
const websockets_1 = __webpack_require__(100);
const WebSocket = __webpack_require__(101);
const cache_manager_1 = __webpack_require__(52);
let WebsocketGateway = class WebsocketGateway {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
        this.activeUsers = new Map();
    }
    onModuleInit() {
        this.server = new WebSocket.Server({ port: 8080 });
        this.server.on('connection', (ws, req) => {
            const wsId = this.getWsIdFromQuery(req.url);
            if (wsId) {
                if (!this.activeUsers.has(wsId)) {
                    this.activeUsers.set(wsId, new Set());
                }
                this.activeUsers.get(wsId)?.add(ws);
                ws.on('close', () => this.handleDisconnect(wsId, ws));
            }
            else {
                ws.close();
            }
        });
    }
    getWsIdFromQuery(url) {
        if (!url)
            return null;
        const queryParams = new URLSearchParams(url.split('?')[1]);
        return queryParams.get('wsId');
    }
    handleDisconnect(userId, ws) {
        const connections = this.activeUsers.get(userId);
        if (connections) {
            connections.delete(ws);
            if (connections.size === 0) {
                this.activeUsers.delete(userId);
            }
        }
    }
    sendReplyNotification({ wsId, message }) {
        const connections = this.activeUsers.get(wsId);
        if (connections) {
            connections.forEach(ws => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'new-reply', message }));
                }
            });
        }
    }
    onModuleDestroy() {
        this.server.close();
        this.activeUsers.clear();
    }
};
exports.WebsocketGateway = WebsocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof WebSocket !== "undefined" && WebSocket.Server) === "function" ? _b : Object)
], WebsocketGateway.prototype, "server", void 0);
exports.WebsocketGateway = WebsocketGateway = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object])
], WebsocketGateway);


/***/ }),
/* 100 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 101 */
/***/ ((module) => {

module.exports = require("ws");

/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentResponseDto = void 0;
const class_transformer_1 = __webpack_require__(103);
class CommentResponseDto {
}
exports.CommentResponseDto = CommentResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "text", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "postId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "homepage", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "photo", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => CommentResponseDto),
    __metadata("design:type", Array)
], CommentResponseDto.prototype, "children", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "email", void 0);


/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDto = void 0;
const graphql_1 = __webpack_require__(81);
const class_transformer_1 = __webpack_require__(103);
const class_validator_1 = __webpack_require__(18);
let PaginationDto = class PaginationDto {
    constructor() {
        this.offset = 0;
        this.limit = 25;
    }
};
exports.PaginationDto = PaginationDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Number of items to skip', defaultValue: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)({ allowNaN: false, allowInfinity: false }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Object)
], PaginationDto.prototype, "offset", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Number of items to fetch', defaultValue: 25 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({ allowNaN: false, allowInfinity: false }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Object)
], PaginationDto.prototype, "limit", void 0);
exports.PaginationDto = PaginationDto = __decorate([
    (0, graphql_1.ArgsType)()
], PaginationDto);


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileController = void 0;
const common_1 = __webpack_require__(3);
const files_1 = __webpack_require__(36);
const jwt_guard_1 = __webpack_require__(78);
const get_file_dto_1 = __webpack_require__(106);
const throttler_1 = __webpack_require__(107);
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    getUrl(params) {
        return this.fileService.generatePresignedUrl({ mimetype: params.mimetype, extension: params.extension });
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(),
    (0, throttler_1.Throttle)({ default: { limit: 3, ttl: 60000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof get_file_dto_1.GetFileDto !== "undefined" && get_file_dto_1.GetFileDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getUrl", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [typeof (_a = typeof files_1.FilesService !== "undefined" && files_1.FilesService) === "function" ? _a : Object])
], FileController);


/***/ }),
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetFileDto = void 0;
const class_validator_1 = __webpack_require__(18);
class GetFileDto {
}
exports.GetFileDto = GetFileDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetFileDto.prototype, "mimetype", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetFileDto.prototype, "extension", void 0);


/***/ }),
/* 107 */
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvidersModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_module_1 = __webpack_require__(109);
const mongodb_module_1 = __webpack_require__(111);
const cache_storage_module_1 = __webpack_require__(113);
const graphql_1 = __webpack_require__(81);
const apollo_driver_config_1 = __webpack_require__(116);
let ProvidersModule = class ProvidersModule {
};
exports.ProvidersModule = ProvidersModule;
exports.ProvidersModule = ProvidersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_module_1.TypeormModule,
            mongodb_module_1.MongodbModule,
            cache_storage_module_1.CacheStorageModule,
            graphql_1.GraphQLModule.forRoot(apollo_driver_config_1.apolloDriverConfig),
        ],
    })
], ProvidersModule);


/***/ }),
/* 109 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeormModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(8);
const typeorm_config_1 = __webpack_require__(110);
let TypeormModule = class TypeormModule {
};
exports.TypeormModule = TypeormModule;
exports.TypeormModule = TypeormModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.appDataSource.options)],
    })
], TypeormModule);


/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appDataSource = void 0;
const typeorm_1 = __webpack_require__(11);
const config_1 = __webpack_require__(40);
const entities_1 = __webpack_require__(9);
const configService = new config_1.ConfigService();
const options = () => {
    const url = configService.get('POSTGRES_URL');
    if (!url) {
        throw new Error('Database URL is empty');
    }
    return {
        url,
        type: 'postgres',
        schema: 'public',
        logging: configService.get('IS_PROD') === 'false',
        entities: [entities_1.CommentEntity],
        synchronize: configService.get('IS_PROD') === 'false',
        migrationsRun: true,
        migrationsTableName: 'migrations',
    };
};
exports.appDataSource = new typeorm_1.DataSource(options());


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongodbModule = void 0;
const mongoose_1 = __webpack_require__(57);
const common_1 = __webpack_require__(3);
const mongodb_config_1 = __webpack_require__(112);
let MongodbModule = class MongodbModule {
};
exports.MongodbModule = MongodbModule;
exports.MongodbModule = MongodbModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot(mongodb_config_1.mongodbURI)]
    })
], MongodbModule);


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mongodbURI = void 0;
const config_1 = __webpack_require__(40);
const configService = new config_1.ConfigService();
exports.mongodbURI = configService.get('MONGODB_URL');


/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CacheStorageModule = void 0;
const common_1 = __webpack_require__(3);
const cache_manager_1 = __webpack_require__(52);
const cache_storage_config_1 = __webpack_require__(114);
let CacheStorageModule = class CacheStorageModule {
};
exports.CacheStorageModule = CacheStorageModule;
exports.CacheStorageModule = CacheStorageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register(cache_storage_config_1.RedisConfig),
        ],
        controllers: [],
    })
], CacheStorageModule);


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisConfig = void 0;
const redisStore = __webpack_require__(115);
const config_1 = __webpack_require__(40);
const configService = new config_1.ConfigService();
exports.RedisConfig = {
    isGlobal: true,
    store: redisStore,
    host: configService.get('REDIS_HOST'),
    port: Number(configService.get('REDIS_PORT')),
};


/***/ }),
/* 115 */
/***/ ((module) => {

module.exports = require("cache-manager-redis-store");

/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.apolloDriverConfig = void 0;
const apollo_1 = __webpack_require__(117);
const path_1 = __webpack_require__(76);
const error_handler_1 = __webpack_require__(118);
exports.apolloDriverConfig = {
    driver: apollo_1.ApolloDriver,
    autoSchemaFile: (0, path_1.join)(process.cwd(), 'libs', 'providers', 'src', 'graphql', 'schema.gql'),
    sortSchema: true,
    context: ({ req, res }) => ({ req, res }),
    formatError: error_handler_1.gqlErrorHandler,
};


/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gqlErrorHandler = void 0;
const common_1 = __webpack_require__(3);
const gqlErrorHandler = (error) => {
    common_1.Logger.warn({ error });
    if ('response' in error.extensions) {
        const { message, ...response } = error.extensions['response'];
        return {
            message,
            extensions: {
                timestamp: new Date().toDateString(),
                ...response,
            },
        };
    }
    return error;
};
exports.gqlErrorHandler = gqlErrorHandler;


/***/ }),
/* 119 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphqlModule = void 0;
const common_1 = __webpack_require__(3);
const resolvers_1 = __webpack_require__(120);
let GraphqlModule = class GraphqlModule {
};
exports.GraphqlModule = GraphqlModule;
exports.GraphqlModule = GraphqlModule = __decorate([
    (0, common_1.Module)({
        providers: [...resolvers_1.RESOLVERS]
    })
], GraphqlModule);


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RESOLVERS = void 0;
const comment_resolver_1 = __webpack_require__(121);
const auth_resolver_1 = __webpack_require__(128);
exports.RESOLVERS = [
    comment_resolver_1.CommentResolver,
    auth_resolver_1.AuthResolver
];


/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentResolver = void 0;
const graphql_1 = __webpack_require__(81);
const comment_facade_1 = __webpack_require__(41);
const user_facade_1 = __webpack_require__(46);
const inputs_1 = __webpack_require__(122);
const comment_response_1 = __webpack_require__(127);
const common_1 = __webpack_require__(3);
const jwt_guard_1 = __webpack_require__(78);
const decorators_1 = __webpack_require__(79);
const cache_manager_1 = __webpack_require__(52);
const websocket_gateway_1 = __webpack_require__(99);
const pagination_dto_1 = __webpack_require__(104);
const class_transformer_1 = __webpack_require__(103);
let CommentResolver = class CommentResolver {
    constructor(commentFacade, userFacade, cacheManager, websocketGateway) {
        this.commentFacade = commentFacade;
        this.userFacade = userFacade;
        this.cacheManager = cacheManager;
        this.websocketGateway = websocketGateway;
    }
    async createComment(createCommentInput, postId, context) {
        const user = context.req.user;
        const { userId, username, email } = await this.cacheManager.get(user.sub);
        const newComment = await this.commentFacade.createComment({
            ...createCommentInput,
            postId,
            username,
            email,
            userId,
        });
        if (createCommentInput.parentComment) {
            const parentComment = await this.commentFacade.getComment(createCommentInput.parentComment);
            const sendNotificationParams = {
                wsId: parentComment.userId,
                message: newComment.text,
            };
            await this.websocketGateway.sendReplyNotification(sendNotificationParams);
        }
        return newComment;
    }
    async updateComment(updateCommentInput, id) {
        return this.commentFacade.updateComment({ ...updateCommentInput, id });
    }
    async deleteComment(id, context) {
        const user = context.req.user;
        const comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new common_1.NotFoundException('Cannot find any comment');
        }
        const { username, email } = await this.cacheManager.get(user.sub);
        if (comment.email !== email || comment.username !== username) {
            throw new common_1.UnauthorizedException('You cannot delete comments of other people');
        }
        await this.commentFacade.deleteComment(id);
        return 'Comment was deleted successfully';
    }
    async getComments(postId, query) {
        const pagination = (0, class_transformer_1.plainToInstance)(pagination_dto_1.PaginationDto, query);
        return this.commentFacade.getComments(postId, pagination);
    }
    async getComment(id) {
        return this.commentFacade.getComment(id);
    }
};
exports.CommentResolver = CommentResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, graphql_1.Mutation)(() => comment_response_1.Comment),
    __param(0, (0, graphql_1.Args)('createCommentInput')),
    __param(1, (0, graphql_1.Args)('postId')),
    __param(2, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof inputs_1.CreateCommentInput !== "undefined" && inputs_1.CreateCommentInput) === "function" ? _e : Object, String, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CommentResolver.prototype, "createComment", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, graphql_1.Mutation)(() => comment_response_1.Comment),
    __param(0, (0, graphql_1.Args)('updateCommentInput')),
    __param(1, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof inputs_1.UpdateCommentInput !== "undefined" && inputs_1.UpdateCommentInput) === "function" ? _g : Object, String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CommentResolver.prototype, "updateComment", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CommentResolver.prototype, "deleteComment", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, graphql_1.Query)(() => [comment_response_1.Comment]),
    __param(0, (0, graphql_1.Args)('postId')),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_k = typeof pagination_dto_1.PaginationDto !== "undefined" && pagination_dto_1.PaginationDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "getComments", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, graphql_1.Query)(() => comment_response_1.Comment),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], CommentResolver.prototype, "getComment", null);
exports.CommentResolver = CommentResolver = __decorate([
    (0, graphql_1.Resolver)(() => comment_response_1.Comment),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof comment_facade_1.CommentFacade !== "undefined" && comment_facade_1.CommentFacade) === "function" ? _a : Object, typeof (_b = typeof user_facade_1.UserFacade !== "undefined" && user_facade_1.UserFacade) === "function" ? _b : Object, typeof (_c = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _c : Object, typeof (_d = typeof websocket_gateway_1.WebsocketGateway !== "undefined" && websocket_gateway_1.WebsocketGateway) === "function" ? _d : Object])
], CommentResolver);


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(123), exports);
__exportStar(__webpack_require__(124), exports);
__exportStar(__webpack_require__(125), exports);
__exportStar(__webpack_require__(126), exports);


/***/ }),
/* 123 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCommentInput = void 0;
const graphql_1 = __webpack_require__(81);
let CreateCommentInput = class CreateCommentInput {
};
exports.CreateCommentInput = CreateCommentInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateCommentInput.prototype, "homepage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommentInput.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateCommentInput.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateCommentInput.prototype, "parentComment", void 0);
exports.CreateCommentInput = CreateCommentInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCommentInput);


/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserInput = void 0;
const graphql_1 = __webpack_require__(81);
let LoginUserInput = class LoginUserInput {
};
exports.LoginUserInput = LoginUserInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginUserInput.prototype, "email", void 0);
exports.LoginUserInput = LoginUserInput = __decorate([
    (0, graphql_1.InputType)()
], LoginUserInput);


/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterUserInput = void 0;
const graphql_1 = __webpack_require__(81);
let RegisterUserInput = class RegisterUserInput {
};
exports.RegisterUserInput = RegisterUserInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserInput.prototype, "email", void 0);
exports.RegisterUserInput = RegisterUserInput = __decorate([
    (0, graphql_1.InputType)()
], RegisterUserInput);


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommentInput = void 0;
const graphql_1 = __webpack_require__(81);
let UpdateCommentInput = class UpdateCommentInput {
};
exports.UpdateCommentInput = UpdateCommentInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "homepage", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "text", void 0);
exports.UpdateCommentInput = UpdateCommentInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateCommentInput);


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Comment = void 0;
const graphql_1 = __webpack_require__(81);
let Comment = class Comment {
};
exports.Comment = Comment;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Comment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "homepage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Comment, { defaultValue: null }),
    __metadata("design:type", Comment)
], Comment.prototype, "parent", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Comment], { defaultValue: [] }),
    __metadata("design:type", Array)
], Comment.prototype, "children", void 0);
exports.Comment = Comment = __decorate([
    (0, graphql_1.ObjectType)()
], Comment);


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResolver = void 0;
const graphql_1 = __webpack_require__(81);
const auth_1 = __webpack_require__(43);
const inputs_1 = __webpack_require__(122);
const responses_1 = __webpack_require__(129);
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async registerUser(user) {
        const registeredUser = await this.authService.register(user);
        return {
            message: 'User successfully registered'
        };
    }
    async loginUser(user, context) {
        const userAgent = context.req.headers['user-agent'] || 'unknown';
        const { token, userId } = await this.authService.login(user, userAgent);
        return {
            message: 'Login successful',
            token,
            wsId: userId.toString(),
        };
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Mutation)(() => responses_1.RegisterResponse),
    __param(0, (0, graphql_1.Args)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof inputs_1.RegisterUserInput !== "undefined" && inputs_1.RegisterUserInput) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthResolver.prototype, "registerUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => responses_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('user')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof inputs_1.LoginUserInput !== "undefined" && inputs_1.LoginUserInput) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthResolver.prototype, "loginUser", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.AuthService !== "undefined" && auth_1.AuthService) === "function" ? _a : Object])
], AuthResolver);


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(130), exports);
__exportStar(__webpack_require__(131), exports);
__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 130 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponse = void 0;
const graphql_1 = __webpack_require__(81);
let LoginResponse = class LoginResponse {
};
exports.LoginResponse = LoginResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "wsId", void 0);
exports.LoginResponse = LoginResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoginResponse);


/***/ }),
/* 131 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterResponse = void 0;
const graphql_1 = __webpack_require__(81);
let RegisterResponse = class RegisterResponse {
};
exports.RegisterResponse = RegisterResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterResponse.prototype, "message", void 0);
exports.RegisterResponse = RegisterResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RegisterResponse);


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebsocketModule = void 0;
const common_1 = __webpack_require__(3);
const websocket_gateway_1 = __webpack_require__(99);
let WebsocketModule = class WebsocketModule {
};
exports.WebsocketModule = WebsocketModule;
exports.WebsocketModule = WebsocketModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [websocket_gateway_1.WebsocketGateway],
        exports: [websocket_gateway_1.WebsocketGateway]
    })
], WebsocketModule);


/***/ }),
/* 133 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitControllersModule = void 0;
const common_1 = __webpack_require__(3);
const comments_controller_1 = __webpack_require__(134);
let RabbitControllersModule = class RabbitControllersModule {
};
exports.RabbitControllersModule = RabbitControllersModule;
exports.RabbitControllersModule = RabbitControllersModule = __decorate([
    (0, common_1.Module)({
        controllers: [comments_controller_1.CommentsController]
    })
], RabbitControllersModule);


/***/ }),
/* 134 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsController = void 0;
const common_1 = __webpack_require__(3);
const comment_facade_1 = __webpack_require__(41);
const websocket_gateway_1 = __webpack_require__(99);
const microservices_1 = __webpack_require__(135);
const create_comment_dto_1 = __webpack_require__(136);
const update_comment_dto_1 = __webpack_require__(137);
const class_transformer_1 = __webpack_require__(103);
const pagination_dto_1 = __webpack_require__(104);
const get_comments_dto_1 = __webpack_require__(138);
let CommentsController = class CommentsController {
    constructor(commentFacade, websocketGateway) {
        this.commentFacade = commentFacade;
        this.websocketGateway = websocketGateway;
    }
    async create(comment) {
        const _comment = await this.commentFacade.createComment(comment);
        if (comment.parentComment) {
            const _parentComment = await this.commentFacade.getComment(comment.parentComment);
            const sendNotificationParams = {
                wsId: _parentComment.userId,
                message: _comment.text,
            };
            await this.websocketGateway.sendReplyNotification(sendNotificationParams);
        }
        return _comment;
    }
    async update(comment) {
        const _comment = await this.commentFacade.getComment(comment.id);
        if (!_comment) {
            throw new common_1.NotFoundException('Cannot find any comment');
        }
        return this.commentFacade.updateComment(comment);
    }
    async delete(id) {
        const comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new common_1.NotFoundException('Cannot find any comment');
        }
        await this.commentFacade.deleteComment(id);
        return 'Comments were deleted successfully';
    }
    async getAll(payload) {
        const { postId, query } = payload;
        const pagination = (0, class_transformer_1.plainToInstance)(pagination_dto_1.PaginationDto, query);
        return this.commentFacade.getComments(postId, pagination);
    }
    async getOne(id) {
        return this.commentFacade.getComment(id);
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, microservices_1.EventPattern)('create_comment'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_comment_dto_1.CreateCommentDto !== "undefined" && create_comment_dto_1.CreateCommentDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
__decorate([
    (0, microservices_1.EventPattern)('update_comment'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof update_comment_dto_1.UpdateCommentDto !== "undefined" && update_comment_dto_1.UpdateCommentDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "update", null);
__decorate([
    (0, microservices_1.EventPattern)('delete_comment'),
    __param(0, (0, microservices_1.Payload)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "delete", null);
__decorate([
    (0, microservices_1.EventPattern)('get_all_comments'),
    __param(0, (0, microservices_1.Payload)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof get_comments_dto_1.GetCommentsDto !== "undefined" && get_comments_dto_1.GetCommentsDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getAll", null);
__decorate([
    (0, microservices_1.EventPattern)('get_one_comment'),
    __param(0, (0, microservices_1.Payload)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getOne", null);
exports.CommentsController = CommentsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof comment_facade_1.CommentFacade !== "undefined" && comment_facade_1.CommentFacade) === "function" ? _a : Object, typeof (_b = typeof websocket_gateway_1.WebsocketGateway !== "undefined" && websocket_gateway_1.WebsocketGateway) === "function" ? _b : Object])
], CommentsController);


/***/ }),
/* 135 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 136 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCommentDto = void 0;
const class_validator_1 = __webpack_require__(18);
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "homepage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "parentComment", void 0);


/***/ }),
/* 137 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommentDto = void 0;
const class_validator_1 = __webpack_require__(18);
class UpdateCommentDto {
}
exports.UpdateCommentDto = UpdateCommentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCommentDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateCommentDto.prototype, "homepage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCommentDto.prototype, "text", void 0);


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCommentsDto = void 0;
class GetCommentsDto {
}
exports.GetCommentsDto = GetCommentsDto;


/***/ }),
/* 139 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(140), exports);


/***/ }),
/* 140 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorsModule = void 0;
const common_1 = __webpack_require__(3);
const core_1 = __webpack_require__(1);
const all_exceptions_filter_1 = __webpack_require__(141);
let ErrorsModule = class ErrorsModule {
};
exports.ErrorsModule = ErrorsModule;
exports.ErrorsModule = ErrorsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: all_exceptions_filter_1.AllExceptionsFilter
            }
        ]
    })
], ErrorsModule);


/***/ }),
/* 141 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const common_1 = __webpack_require__(3);
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionsFilter_1.name);
    }
    catch(exception, host) {
        this.logger.error(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json(this._response(status, request, exception));
    }
    _response(status, request, exception) {
        return {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request?.url,
            method: request?.method,
            params: request?.params,
            query: request?.query,
            exception: {
                name: exception['name'],
                message: exception['message'],
            },
        };
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);


/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rabbitOptions = void 0;
const microservices_1 = __webpack_require__(135);
const config_1 = __webpack_require__(40);
const configService = new config_1.ConfigService();
exports.rabbitOptions = {
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: [configService.get('RABBIT_URL')],
        queue: configService.get('RABBIT_QUEUE'),
        queueOptions: {
            durable: false,
        },
    },
};


/***/ }),
/* 143 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const rabbitmq_config_1 = __webpack_require__(142);
const helmet_1 = __webpack_require__(143);
const common_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe());
    const microservice = app.connectMicroservice(rabbitmq_config_1.rabbitOptions);
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;