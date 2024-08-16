import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017/waiterapp')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));

  })
  .catch((error) => console.log(error));
