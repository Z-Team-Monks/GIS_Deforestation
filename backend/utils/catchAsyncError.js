const catchAsyncErrors = func =>{
    return (req, resp, next) => {func(req, resp, next).catch(next);}
}

module.exports = catchAsyncErrors;