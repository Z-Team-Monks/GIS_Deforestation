exports.sendRespWithToken = (statusCode, data, resp, token)=>{

    const cookieOptions = {
        expires: new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000)),
        httpOnly: true
    }
    if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    resp.cookie('jwt', token,cookieOptions);

    resp.status(statusCode).json({
        status: "success",
        token:token,
        message:{
            data
        }
    });
}

exports.sendResponce = (statusCode, data, resp)=>{
    resp.status(statusCode).json({
        status: "success",
        message:{
            data
        }
    });
}