import { errorsStatusesConfig } from '../configs/configs.js';

const config = errorsStatusesConfig.default;

class HttpError extends Error {
    constructor(message = config.message, statusCode = config.statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default HttpError;
