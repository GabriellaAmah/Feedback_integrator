enum errorCode {
    UNAUTHORIZED = 401,
    UNPROCESSABLE_ENTITY = 422,
    INTERNAL_ERROR = 500
}

class ErrorResponse extends Error {
    statusCode: errorCode
    constructor(message : string, statusCode : errorCode){
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}

export default ErrorResponse