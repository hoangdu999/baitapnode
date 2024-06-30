module.exports = (err, req, res, next) => {
  let error = { ...err };

  if (err?.name === 'CastError') {
    error.statusCode = 400;
    error.message = err.message;
  }

  if (err?.code === 11000) {
    error.statusCode = 400;
    error.message = 'Duplicate Resource';
  }

  if (err.statusCode) {
    error.statusCode = err.statusCode;
    error.message = err.message;
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || err.message || 'Server error';

  return res.status(statusCode).json({
    statusCode,
    message,
  });
};
