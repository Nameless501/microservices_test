import { NextFunction, Request, Response } from 'express';

import type { Prisma } from '@prisma/client';

import usersServices from '../services/users.js';

import logsServices from '../services/logs.js';

import { ResponseStatusCodes } from '../configs/statuses.config.js';

import { LogsTypes } from '../configs/logs.config.js';

class UsersController {
    constructor(
        private createUser: (
            data: Prisma.UserCreateInput
        ) => Promise<Prisma.PromiseReturnType<typeof usersServices.createUser>>,
        private findUsers: () => Promise<
            Prisma.PromiseReturnType<typeof usersServices.findUsers>
        >,
        private updateUser: (
            id: number,
            data: Prisma.UserUpdateInput
        ) => Promise<void>,
        private sendLogs: (id: number, type: LogsTypes) => Promise<void>
    ) {}

    public handleUserCreate = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const user = await this.createUser(req.body);
            await this.sendLogs(user.id, LogsTypes.create);
            res.sendStatus(ResponseStatusCodes.created);
        } catch (err) {
            next(err);
        }
    };

    public handleGetAllUsers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const usersList = await this.findUsers();
            res.send(usersList);
        } catch (err) {
            next(err);
        }
    };

    public handleUserUpdate = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const userId = Number(req.params.userId);
            await this.updateUser(userId, req.body);
            await this.sendLogs(userId, LogsTypes.update);
            res.sendStatus(ResponseStatusCodes.updated);
        } catch (err) {
            next(err);
        }
    };
}

export default new UsersController(
    usersServices.createUser,
    usersServices.findUsers,
    usersServices.updateUser,
    logsServices.sendLogs
);
