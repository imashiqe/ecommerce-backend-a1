import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { productRoutes } from './modules/product/product.route';


const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//application routes

app.use('/api/v1/products', productRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Ecommerce Server Running ');
});

export default app;