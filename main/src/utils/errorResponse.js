var errorCode;
(function (errorCode) {
    errorCode[errorCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    errorCode[errorCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    errorCode[errorCode["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(errorCode || (errorCode = {}));
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
export default ErrorResponse;
