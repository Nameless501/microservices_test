import 'dotenv/config';

import { RequestInit } from 'node-fetch';

export const LOGS_API_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/'
        : process.env.LOGS_API_URL as string;

export enum LogsTypes {
    create = 'create',
    update = 'update',
}

export const getLogFetchConfig = (
    id: number,
    type: LogsTypes
): RequestInit => ({
    method: 'post',
    body: JSON.stringify({ id, type }),
    headers: { 'Content-Type': 'application/json' },
});
