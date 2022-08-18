import pkg from 'firebase-admin'
const admin = pkg;
import { serviceAccount } from '../../firebase/serviceAccount.js'
import { config } from "../config/config.js";

const initFirebase = async () => {
    try {
      if (config.server.dbSelector !== config.persistences.firebase) return;
      
      await admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: config.Firebase.databaseURL
      });
      console.log("Fire Db Conected");
    } catch (error) {
      console.error(error);
    }
  };
  
  const FirebaseService = {
    initFirebase ,
  };
  
  export { FirebaseService };
  