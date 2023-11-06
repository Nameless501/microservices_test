import express from 'express';

import helmet from 'helmet';

import cors from 'cors';

import 'dotenv/config';

import router from './routes/index.js';

import { corsConfig } from './configs/configs.js';

import { ROOT_ROUTE } from './configs/constants.js';

import errorsHandler from './middlewares/ErrorsHandler.js';

const app = express();

app.use(helmet());

app.use('*', cors(corsConfig));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(ROOT_ROUTE, router);

app.use(errorsHandler.watch);

app.listen(process.env.PORT);
