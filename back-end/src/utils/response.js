const response = (status, message) => ({
    status,
    message,
  });

const responseError = (status, message) => ({
    status,
    message: { message },
  });

module.exports = {
  response,
  responseError,
};
