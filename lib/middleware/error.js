// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let status = err.status || 500;

  res.status(status);

  console.log('YIKES', err);

  res.send({
    status,
    message: err.message
  });
};
