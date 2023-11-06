import HttpError from './HttpError.js';

import { errorsStatusesConfig } from '../configs/statuses.config.js';

const config = errorsStatusesConfig.notFound;

class NotFoundError extends HttpError {
    constructor(
        public message: string = config.message,
        public statusCode: number = config.statusCode
    ) {
        super(message, statusCode);
    }
}

export default NotFoundError;
