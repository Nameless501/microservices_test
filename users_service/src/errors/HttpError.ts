abstract class HttpError extends Error {
    protected constructor(public message: string, public statusCode: number) {
        super(message);
    }
}

export default HttpError;
