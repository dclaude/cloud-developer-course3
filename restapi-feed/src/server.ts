import express from 'express';
import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/v0/index.router';
import bodyParser from 'body-parser';
import { V0MODELS } from './controllers/v0/model.index';
import cors from 'cors'

(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  
  app.use(cors()) // enable all CORS requests
  app.use(bodyParser.json());
  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${port}` );
      console.log( `press CTRL+C to stop server` );
  } );
})();