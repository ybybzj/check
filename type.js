var t = require('@zj/type');
var check = require('./index');
function check_t(type, msg, val){
  if(arguments.length === 2){
    val = msg;
    msg = 'Invalid Type';
  }
  var result = t(val) === type;
  check(result, !result && _makeErr(msg, type, val));
}
function _makeErr(msg, type, val){
  var err = new TypeError(msg + '\nexpect type "' +type+ '", but given: ' + val);
  return err;
}

module.exports = check_t;