'use strict';


var path     = require('path');
var generate = require('markdown-it-testgen');

/*eslint-env mocha*/

describe('unsecure ignore', function () {
  var md = require('markdown-it')()
    .use(require('..'), { secure: false });

  generate(path.join(__dirname, 'fixtures/unsecure.txt'), md);
});
