import { connect, connection } from 'mongoose';

export async function connectDB() {
   try {
      connect(process.env.MONGO_URI!);
      const connectionResult = connection;

      connectionResult.on('connected', () => {
         console.log('MongoDB connected successfully');
      });

      connectionResult.on('error', (err) => {
         console.log(
            'MongoDB connection error. Please make sure MongoDB is running. ' +
               err
         );
         process.exit();
      });
   } catch (error) {
      console.log('Something goes wrong!');
      console.log(error);
   }
}
