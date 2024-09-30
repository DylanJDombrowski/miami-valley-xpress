import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'miami-valley-xpress.ctuoeiegwvip.us-east-1.rds.amazonaws.com',
  user: 'mvxAdmin',
  password: '610MiamiValleyXpress!541',
  database: 'mvx_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const sequelize = new Sequelize(
  'mvx_database',
  'mvxAdmin',
  '610MiamiValleyXpress!541',
  {
    host: 'miami-valley-xpress.ctuoeiegwvip.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export { pool, sequelize };
