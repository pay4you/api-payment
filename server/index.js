import app from '../src/app';
import db from'../src/models';
import config from '../config/config';

app.listen(3000, () => {
  db.sequelize.sync();
  console.log('Running on port 3000...');
});

console.log('Executing Server: index.js ...');
console.log('');