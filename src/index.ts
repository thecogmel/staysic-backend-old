import * as dotenv from 'dotenv';
import 'reflect-metadata';
import * as express from 'express';
import * as cors from 'cors';

import './database/connect';
import routes from './routes';

dotenv.config();

const app = express();

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Then pass these options to cors:
app.use(cors());

app.use(express.json());

// setup express app here
app.use(routes);

// start express server
app.listen(3000, () => console.log('Express server has started on port 3000.'));
