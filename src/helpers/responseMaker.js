const successResponse = (res, message, payload = {}, code = 200) =>{
    return res.status(code).json({
        code,
        status: 'success',
        message,
        payload
    })
}

const errorResponse = (res, message, code = 400) => {
    return res.status(code).json({
        code,
        status: 'error',
        message
    });
}

export {
    successResponse,
    errorResponse
}