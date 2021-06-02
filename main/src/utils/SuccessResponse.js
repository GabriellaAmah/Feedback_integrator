var statusCode;
(function (statusCode) {
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["CREATED"] = 201] = "CREATED";
})(statusCode || (statusCode = {}));
const SuccessResponse = (message, data, code) => {
    return {
        statusCode: code,
        success: true,
        message,
        data
    };
};
export default SuccessResponse;
