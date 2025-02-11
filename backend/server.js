import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';

console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
