'use strict';

var _app = require('../src/app');

var _app2 = _interopRequireDefault(_app);

var _models = require('../src/models');

var _models2 = _interopRequireDefault(_models);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(3000, function () {
  _models2.default.sequelize.sync();
  console.log('Running on port 3000...');
});

console.log('Executing Server: index.js ...');
console.log('');
//# sourceMappingURL=index.js.map