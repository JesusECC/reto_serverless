
function Response({ json, message, statusCode, allowCORS = true }) {
    let data;
    if (statusCode === 200) {
        data = {
            error: false,
            message: message,
            data: json,
            code: 200
        };
    } else if (statusCode === 500) {
        data = {
            error: true,
            message: message,
            data: json,
            code: 500
        };
    }
    const response = {
        statusCode,
        body: JSON.stringify(data),
        headers: {},
    };

    if (allowCORS) {
        response.headers = { "Access-Control-Allow-Origin": "*" };
    }
    response.headers = { "content-type": "application/json" };

    return response;
}

export const successResponse = (json, message) => {
    return Response({
        json,
        message,
        statusCode: 200,
    });
};

export const errorResponse = (json, message) => {
    return Response({
        json,
        message,
        statusCode: 500,
    });
};
