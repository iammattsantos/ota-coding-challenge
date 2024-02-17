import express from 'express';
import dotevnv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import { get, post, put, del } from './routes';

dotevnv.config();

if (!process.env.PORT) {
  console.log('No port specified ..');
}

const app = express();
const encodeOptions = {
  extended: true,
};

app.use(express.json());
app.use(express.urlencoded(encodeOptions));
app.use(cors());
app.use(helmet());

app.use('/', get.router);
app.use('/', post.router);
app.use('/', put.router);
app.use('/', del.router);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server is running on port ${process.env.PORT} ..`);
});
