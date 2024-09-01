import {Injectable, OnModuleInit, OnModuleDestroy, Inject} from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import * as WebSocket from 'ws';
import {Cache, CACHE_MANAGER} from "@nestjs/cache-manager";
import {SendNotificationDto} from "./dtos";

@Injectable()
export class WebsocketGateway implements OnModuleInit, OnModuleDestroy {
    @WebSocketServer()
    private server: WebSocket.Server;
    private activeUsers: Map<string, Set<WebSocket>> = new Map();
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}
    onModuleInit() {
        this.server = new WebSocket.Server({ port: 8080 });

        this.server.on('connection', (ws: WebSocket, req) => {
            const wsId = this.getWsIdFromQuery(req.url);
            if (wsId) {
                if (!this.activeUsers.has(wsId)) {
                    this.activeUsers.set(wsId, new Set());
                }
                this.activeUsers.get(wsId)?.add(ws);
                ws.on('close', () => this.handleDisconnect(wsId, ws));
            }
        });
    }

    private getWsIdFromQuery(url: string | undefined): string | null {
        if (!url) return null;
        const queryParams = new URLSearchParams(url.split('?')[1]);
        return queryParams.get('wsId');
    }

    private handleDisconnect(userId: string, ws: WebSocket) {
        const connections = this.activeUsers.get(userId);
        if (connections) {
            connections.delete(ws);
            if (connections.size === 0) {
                this.activeUsers.delete(userId);
            }
        }
    }

    sendReplyNotification({wsId, message}: SendNotificationDto) {
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
}
