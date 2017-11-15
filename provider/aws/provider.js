'use strict'

const config = require('../../config')
const aws = require('../../models/aws')

var params = {
  Name: 'STRING_VALUE', /* required */
  WithDecryption: true || false
};

aws.getParameter(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

