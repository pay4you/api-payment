'use strict';

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// clearscreen();

_app2.default.listen(3000, function () {
  console.log('Running on port 3000...');
});

console.log('Executing Server: index.js ...');
console.log('');