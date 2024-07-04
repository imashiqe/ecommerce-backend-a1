

import mongoose from 'mongoose';
import config from './app/config/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);

    app.listen(config.port, () => {
      console.log(`Ecommerce Server Running on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main();