const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log('error :>> ', error);
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message})
  }
  return res.status(500).json({ msg: 'Something wrong try again later'})
}

module.exports = errorHandlerMiddleware