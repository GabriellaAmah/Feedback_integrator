enum statusCode {
    OK = 200,
    CREATED = 201
}

const SuccessResponse = (message : string, data : object, code : statusCode) =>{
    return {
        statusCode : code,
        success : true,
        message,
        data
    }
} 

export default SuccessResponse