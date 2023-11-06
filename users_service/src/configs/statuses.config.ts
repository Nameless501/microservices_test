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
} as const;

export enum ResponseStatusCodes {
    success = 200,
    created = 201,
    updated = 204,
}
