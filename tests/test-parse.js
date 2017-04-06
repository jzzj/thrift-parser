const thriftParser = require('../parser');
const assert = require('assert');
const fs = require('fs');
const expectoin = require('./test-parse.expection.json');

fs.readFile('./test.thrift', (error, buffer) => {
  var ast = thriftParser(buffer);
  assert.deepEqual(ast, expectoin);
});
