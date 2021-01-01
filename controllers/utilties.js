const _ = require('lodash');

const validateParams = function validateParams(object,paramsArray){
  for(param of paramsArray){
    if(_.isNull(object[`${param}`]) && _.isEmpty(object[`${param}`])){
        return {
            valid : false,
            param : param
        }
    }
  }
  return {
      valid : true
  }
}

module.exports = {
    validateParams :  validateParams
}