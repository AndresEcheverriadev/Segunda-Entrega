import pkg from 'firebase-admin'
const admin = pkg;
const db = admin.firestore();
// import { serviceAccount } from '../../firebase/serviceAccount.js'
import { config } from "../config/config.js";
const serviceAccount = {
  "type": "service_account",
  "project_id": "entrega2backend",
  "private_key_id": "c98911623e2edaec793a9c48d2a9b5a25dfeda6c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5C7OZZ0A/BjcG\nJO0u1aaa1xz9xfwdZtXBxRG4gnFYoIEUMPU3nFkLA9CnMMrEWw96ju7/CQbhbiRS\nBcz0wnqAoIYisOxof7doNMtKT3O5vOjelWKnx0yG7Ij9svzosBZEMLK5iHgzmadz\nCGwCC2fadk+2csleRRhxHN/zDWl/55O72uqtwCxnIGt9ROJBVyyuk3C1wRrYD2fp\n3/b0jVpOZtZMp2rc1LJYqR+Z2BdbuXNlFLvG8zOn3RllhQ4Vj6G3ym0GYN5tlLip\nn5sW8jugUdUsvqvS8mixU4e05dcIu1qMDoHoFVXZsjHr13dPnmckqEjqG3QfWMaK\nRGauzmQzAgMBAAECggEAL1OcVBQxvMzAnuwr00omabyxt//+eqCV9BCMdzW5epLW\nYI0i8l2k8mm/4Drc6Tpm65AJ9SVgYqCSXn4ITOM+hI5JsC6y0Ak2Jcs24SMP9IWp\nw1/Okx2oZ2uwn7466+I5V6hi1YvfPkdCqeuSADXdkmSm/4E9GkSuuyNI7bdU77ag\nsuj+p8c5YHeWWpscnn7gTL0NN26bmhu2AzcnCpwOMxdHZH+wwypLlnTkgXw23jJB\nR4m/HHSCPFW+iJVwIgIYZf3leMicqFQmMqj13LCuePNtgxmFLcUWLhswmz4U/CfV\nea2RV8PN2ThPnwoe/Wyc936xo3JiBl9+crdsLCJGtQKBgQD7pEIwr6VqbfPvc9X6\nBZ1Mtr41xiEx8PjORzrpZ/0LqK2gpzpaMgzIk7jVtZgNJb7kVPlRV8Re7H1ZaO3J\n/3joZlleOR62dfuscGcAjChe0yTEJRX1qczRkb4BYH1oN5WuWaUqb8bv6CaABEem\nUhoR589gZ4PHSG2uKLByRf39JwKBgQC8QCqm/w+ZLQykkZX0//45oIbLwXrLrpSn\noGmPb2P+yDfU11B4SiWru9gDO4RrdrJVLljw7woyD4GU9RWnuJ0qsGHgfbMYC776\nYzBsspjhE28N87RIySDjEN7VFC6Difg7sfLmBCzNpcIVuWE/jTJuweOHVTkyOxgj\naarCV+ZgFQKBgQDVHjgwo5GkoZqGocQHC9o8rkhJopNaiIsvqIPsSXW1+hWSig6R\ndPH+rZ1M4Y71E5KoLo84pOxauE8w+fzppsPvjz8A3b91KFcNo+SYQhuus4Pf2sjO\nVhBxLM2OvPl42hqanrGTTzdc13BD21wTMFWD9J9dNk4U6PJ7HVrSbRS+4QKBgC1K\nJrjMjl0kuHDzUaeC2w/ULfnhT4CnPL5jWmIWw3DtjHkZYBPAivWZGKwWapJMGTVj\nFCTK7aIDlwJWQGJ8iNtXWgTfWPIFCWpF6MWN5jfoLASoSAxmzxGx4lpTI6mjzOPX\nuP9bq8fCBEKjueDHQIXjAbFycHNEQldquZlN+m/NAoGBAIPobQriaopywHUR72us\nUPrUStUsfj0CsfmVAnrPJmskCPVUqBp0WC03gVLxk9szGT6lmNCDOi9nq7ULaY69\nz9GSsSCCSPuzsBrSCENP/jZ1kda47UpRU62dHu34lGr0VxB5RP33cUKgXdctv3GF\nWto98O7B5O3kL+ysqCIc55Ra\n-----END PRIVATE KEY-----\n",
  // "private_key": config.Firebase.privateKey,
  "client_email": "firebase-adminsdk-ilrr1@entrega2backend.iam.gserviceaccount.com",
  "client_id": "102529280037504567967",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ilrr1%40entrega2backend.iam.gserviceaccount.com"
};

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
  
  export { FirebaseService,db,admin };
  