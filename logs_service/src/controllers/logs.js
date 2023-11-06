import logsServices from '../services/logs.js';

import { responseStatusCodes } from '../configs/configs.js';

import { RECORDS_PER_PAGE } from '../configs/constants.js';

class UsersController {
    constructor(createLog, findLogs, countLogs) {
        this._createLog = createLog;
        this._findLogs = findLogs;
        this._countLogs = countLogs;
    }

    handleLogCreate = async (req, res, next) => {
        try {
            const { id, type } = req.body;
            await this._createLog({ userId: id, type });
            res.sendStatus(responseStatusCodes.created);
        } catch (err) {
            next(err);
        }
    };

    _findLogsByParams = async ({ userId, page }) => {
        const logsCount = await this._countLogs({ userId });
        const logs = await this._findLogs({ userId, page });
        return {
            page,
            pagesCount: Math.ceil(logsCount / RECORDS_PER_PAGE),
            logs,
        };
    };

    getLogs = async (req, res, next) => {
        try {
            const params = {
                page: req.query.page ? Number(req.query.page) : 1,
                userId: req.query.id ? Number(req.query.id) : undefined,
            };
            const result = await this._findLogsByParams(params);
            res.send(result);
        } catch (err) {
            console.log(err);
            next(err);
        }
    };
}

export default new UsersController(
    logsServices.createLog,
    logsServices.findLogs,
    logsServices.countLogs
);
