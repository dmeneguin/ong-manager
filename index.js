const express = require('express');
const consign = require('consign');
const sequelize = require('./config/database');

const start = async () => {

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    
    try {
      const app = express();

      app.use(express.json());
      app.use(express.urlencoded({
          extended: true
        }));
  
      consign()
      .include('adapters/api/routes')
      .into(app);

      app.listen(3000, () => console.log('listening port 3000'));
    } catch (err) {
      console.log(err);
      process.exit(1)
    }
  }
  start()