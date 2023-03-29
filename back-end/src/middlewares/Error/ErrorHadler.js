const ApiError = require('../../error/ApiError');

const errorHandler = async (error, _req, res, _next) => {
    if (error instanceof ApiError) {
      if (!error.message) return res.status(error.statusCode).json('');
      return res.status(error.statusCode).json({ message: error.message });
    }
    res.status(500).json({ message: error });
  };

module.exports = errorHandler;
