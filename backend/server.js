import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

/* secret variables */
dotenv.config();

const app = express();
app.use(cors());
/* middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

/* const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/frontend/build')));
app.get('*', (req,res) => 
  res.sendFile(path.join(_dirname, '/frontend/build/index.html'))
) */

/* mongoDB connection */
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* route for user */
app.use('/api/users', userRouter);

/* routes for products */
app.use('/api/products', productRouter);

/* routes for orders */
app.use('/api/orders', orderRouter);

/* Paypal */
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})
/* testing that server is OK */
app.get('/', (req, res) => {
  res.send('server is ready')
});

/* Testing if there was an error with server */
app.use((err, res) => {
  res.status(500).send({message: err.message})
})

/* variable of the port */
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`serve at http://localhost:${port}`);
});