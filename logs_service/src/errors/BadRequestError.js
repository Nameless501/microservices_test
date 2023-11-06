import HttpError from './HttpError.js';

import { errorsStatusesConfig } from '../configs/configs.js';

const config = errorsStatusesConfig.badRequest;

class BadRequestError extends HttpError {
    constructor(message = config.message, statusCode = config.statusCode) {
        super(message, statusCode);
    }
}

export default BadRequestError;
