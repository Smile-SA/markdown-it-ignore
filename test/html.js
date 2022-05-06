'use strict';


var path     = require('path');
var generate = require('markdown-it-testgen');

/*eslint-env mocha*/

describe('html ignore', function () {
  var md = require('markdown-it')({ html: true })
    .use(require('..'));

  generate(path.join(__dirname, 'fixtures/html.txt'), md);
});
