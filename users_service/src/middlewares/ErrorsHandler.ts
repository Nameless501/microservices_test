import { Response, Request, NextFunction, ErrorRequestHandler } from 'express';

import HttpError from '../errors/HttpError.js';

import DefaultError from '../errors/DefaultError.js';

class ErrorsHandler {
    private error: HttpError = new DefaultError();

    private checkError = (err: Error): void => {
        this.error = err instanceof HttpError ? err : new DefaultError();
    };

    private sendResponse = (res: Response): void => {
        res.status(this.error.statusCode).send({ message: this.error.message });
    };

    public watch: ErrorRequestHandler = (
        err: Error,
        req: Request,
        res: Response,
        _next: NextFunction
    ): void => {
        this.checkError(err);
        this.sendResponse(res);
    };
}

export default new ErrorsHandler();
