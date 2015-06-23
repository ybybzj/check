var t = require('typology');
var check = require('./index');
function check_d(description, msg, val){
  if(arguments.length === 2){
    val = msg;
    msg = 'Invalid Type';
  }
  var result = t.scan(description, val);
  check(!result.error, result.error && _makeErr(msg, result));
}
function _makeErr(msg, info){
  var err = new TypeError(msg);
  err.info = info;
  return err;
}

module.exports = check_d;