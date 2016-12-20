var mime = require('mime-types');

module.exports = function (request, response, next) {
  // parse out the file extension
  var match = request.path.match(/^([^.]+)\.([a-z]+)(\?.*)?$/);

  if (match) {
    request.url = match[1] + (match[3] || '');
    request.headers['accept'] = mime.lookup(match[2]);
  }

  next();
};