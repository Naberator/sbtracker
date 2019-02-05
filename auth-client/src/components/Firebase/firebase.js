import app from 'firebase/app';
import 'firebase/auth';
import * as CREDS from '../../ds.Store1';
const config = {
    apiKey: CREDS.API_KEY,
    authDomain: CREDS.AUTH_DOMAIN,
    databaseURL: CREDS.DATABASE_URL,
    projectId: CREDS.PROJECT_ID,
    storageBucket: CREDS.STORAGE_BUCKET,
    messagingSenderId: CREDS.MESSAGING_SENDER_ID
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
}

export default Firebase;

