import { z } from 'zod';

export const corsConfig = {
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
    credentials: true,
};

export const errorsStatusesConfig = {
    badRequest: {
        statusCode: 400,
        message: 'Bad Request.',
    },
    notFound: {
        statusCode: 404,
        message: 'Not found.',
    },
    default: {
        statusCode: 500,
        message: 'Something went wrong. Try Again Later.',
    },
};

export const responseStatusCodes = {
    success: 200,
    created: 201,
};

export const newLogValidationSchema = z.object({
    id: z.number({
        required_error: 'Id is required',
        invalid_type_error: 'Id must be a number',
    }),
    type: z.enum(['update', 'create'], {
        errorMap: () => ({
            message: "Wrong type. Available options: 'update' | 'create'",
        }),
    }),
});
