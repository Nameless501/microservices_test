import express, { Express } from 'express';

import helmet from 'helmet';

import cors from 'cors';

import 'dotenv/config';

import router from './routes/index.js';

import corsConfig from './configs/cors.config.js';

import { routesConfig } from './configs/routes.config.js';

import errorsHandler from './middlewares/ErrorsHandler.js';

const app: Express = express();

app.use(helmet());

app.use('*', cors(corsConfig));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routesConfig.root, router);

app.use(errorsHandler.watch);

app.listen(process.env.PORT);
