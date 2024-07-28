// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {  // FIND BUG FOR NOT WRITE RETURN KEYWORD
//         Promise.resolve(requestHandler(req
//             , res, next
//         )).catch((err) => next(err));
//      }
// }

// export {asyncHandler}


const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
}

export { asyncHandler };


// const asyncHandler = () =>{}
// const asyncHandler = (func) => { }
// const asyncHandler = () => async () => { }





// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({success: false,
//             message: err.message
//         })
//     }
// } 