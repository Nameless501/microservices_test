import { Router, Request, Response, NextFunction } from 'express';

import usersController from '../controllers/users.js';

import { routesConfig } from '../configs/routes.config.js';

import NotFoundError from '../errors/NotFoundError.js';

import { createValidationMiddleware } from '../utils/helpers.js';

import {
    createUserCredentialsSchema,
    updateUserCredentialsSchema,
} from '../configs/validation.config.js';

const router: Router = Router();

router.post(
    routesConfig.root,
    createValidationMiddleware(createUserCredentialsSchema),
    usersController.handleUserCreate
);

router.patch(
    routesConfig.user,
    createValidationMiddleware(updateUserCredentialsSchema),
    usersController.handleUserUpdate
);

router.get(routesConfig.root, usersController.handleGetAllUsers);

router.use((req: Request, res: Response, next: NextFunction) =>
    next(new NotFoundError())
);

export default router;
