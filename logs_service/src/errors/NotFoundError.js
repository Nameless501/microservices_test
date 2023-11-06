import HttpError from './HttpError.js';

import { errorsStatusesConfig } from '../configs/configs.js';

const config = errorsStatusesConfig.notFound;

class NotFoundError extends HttpError {
    constructor(message = config.message, statusCode = config.statusCode) {
        super(message, statusCode);
    }
}

export default NotFoundError;
