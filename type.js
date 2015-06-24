var t = require('typology');
var check = require('./index');
function check_t(description, val, msg){
  msg = msg || 'Invalid Type';
  var result = t.scan(description, val);
  check(!result.error, result.error && _makeErr(msg, result));
}
function _makeErr(msg, info){
  var err = new TypeError(msg + (info.path ? '\nPath: [' +info.path+']': '')+ '\n' + info.error);
  err.info = info;
  return err;
}

check.t = check_t;
module.exports = check;