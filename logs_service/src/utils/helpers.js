import { ZodError } from 'zod';

import BadRequestError from '../errors/BadRequestError.js';

export const createValidationMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        next(
            err instanceof ZodError
                ? new BadRequestError(
                      err.issues.map(({ message }) => message).join('; ')
                  )
                : new BadRequestError()
        );
    }
};
