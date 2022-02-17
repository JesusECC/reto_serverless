import * as yup from "yup";
import { errorResponse } from "./response";

class HttpError extends Error {
    constructor(statusCode, body = {}) {
        super(JSON.stringify(body));
    }
}

export const handleError = (e) => {
    if (e instanceof TypeError) {
        return errorResponse([], e.message);
    }
    if (e instanceof ReferenceError) {
        return errorResponse([], e.message);
    }
    if (e instanceof yup.ValidationError) {
        return errorResponse([], e.errors);
    }

    if (e instanceof SyntaxError) {
        return errorResponse([], `invalid request body format : "${e.message}"`);
    }

    if (e instanceof HttpError) {
        return {
            statusCode: e.statusCode,
            headers: {
                "content-type": "application/json",
            },
            body: e.message,
        };
    }

    throw e;
};
