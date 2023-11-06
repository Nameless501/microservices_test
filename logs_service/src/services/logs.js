import { PrismaClient } from '@prisma/client';

import { RECORDS_PER_PAGE } from '../configs/constants.js';

const prisma = new PrismaClient();

class LogsServices {
    constructor(logSchema) {
        this._logSchema = logSchema;
    }

    createLog = async (data) => {
        await this._logSchema.create({ data });
    };

    findLogs = async ({ userId, page }) =>
        this._logSchema.findMany({
            skip: (page - 1) * RECORDS_PER_PAGE,
            take: RECORDS_PER_PAGE,
            where: { userId },
        });

    countLogs = async ({ userId }) =>
        this._logSchema.count({ where: { userId } });
}

export default new LogsServices(prisma.logs);
