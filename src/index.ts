import 'reflect-metadata';
import * as express from 'express';
import cors from 'cors';

import './database/connect';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

// setup express app here
app.use(routes);

// start express server
app.listen(3000, () => console.log('Express server has started on port 3000.'));
