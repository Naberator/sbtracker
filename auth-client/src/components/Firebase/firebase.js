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

    // *** Auth API ***
    // Create User with Email and Password
    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    // Sign In - Email and Password
    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    // Sign Out
    doSignOut = () => this.auth.signOut();

    // Reset Password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // Update Password
    doPasswordUpdate = password => this.auth.updatePassword(password);
}

export default Firebase;

