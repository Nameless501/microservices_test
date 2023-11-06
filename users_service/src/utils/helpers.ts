import { Request, Response, NextFunction } from 'express';

import { ZodSchema, ZodError } from 'zod';

import BadRequestError from '../errors/BadRequestError.js';

export const createValidationMiddleware =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
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
