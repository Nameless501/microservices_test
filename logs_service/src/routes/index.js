import { Router } from 'express';

import logsController from '../controllers/logs.js';

import { ROOT_ROUTE } from '../configs/constants.js';

import NotFoundError from '../errors/NotFoundError.js';

import { createValidationMiddleware } from '../utils/helpers.js';

import { newLogValidationSchema } from '../configs/configs.js';

const router = Router();

router.post(
    ROOT_ROUTE,
    createValidationMiddleware(newLogValidationSchema),
    logsController.handleLogCreate
);

router.get(ROOT_ROUTE, logsController.getLogs);

router.use((req, res, next) => next(new NotFoundError()));

export default router;
