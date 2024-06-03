function asyncMiddleware(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
      //   return res.status(error.statusCode).json({
      //     statusCode: error.statusCode,
      //     message: error.message,
      //   });
    }
  };
}

module.exports = asyncMiddleware;
