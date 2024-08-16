import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/waiterapp';

// mongoose.connect('mongodb://localhost:27017/waiterapp')
// mongoose.connect('mongodb://host.docker.internal:27017/waiterapp')
mongoose.connect(mongoUrl)
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, "..", "uploads")));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));

  })
  .catch((error) => console.log(error));
