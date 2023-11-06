import HttpError from '../errors/HttpError.js';

class ErrorsHandler {
    error = new HttpError();

    _checkError = (err) => {
        this.error = err instanceof HttpError ? err : new HttpError();
    };

    _sendResponse = (res) => {
        res.status(this.error.statusCode).send({ message: this.error.message });
    };

    watch = (err, req, res, _next) => {
        this._checkError(err);
        this._sendResponse(res);
    };
}

export default new ErrorsHandler();
