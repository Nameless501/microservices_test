import fetch from 'node-fetch';

import {
    LOGS_API_URL,
    LogsTypes,
    getLogFetchConfig,
} from '../configs/logs.config.js';

class LogsServices {
    public sendLogs = async (id: number, type: LogsTypes): Promise<void> => {
        try {
            await fetch(LOGS_API_URL, getLogFetchConfig(id, type));
        } catch (err) {
            console.log(err);
        }
    };
}

export default new LogsServices();
