import { FirebaseApp, initializeApp } from 'firebase/app';
import { User, getAuth } from 'firebase/auth';

export class FirebaseService {
    public static instance = new FirebaseService()
    private static firebaseAppObject: FirebaseApp

    constructor() {
        FirebaseService.firebaseApp()
     }

    private static firebaseApp(): FirebaseApp | undefined {
        if(this.firebaseAppObject != null) {
            return this.firebaseAppObject  
        }

        const firebaseConfig = {
            apiKey: "AIzaSyAyJAVvkWVwK9Vsw48xydt57KyAbIZeGjA",
            authDomain: "j-archives.firebaseapp.com",
            projectId: "j-archives",
            storageBucket: "j-archives.appspot.com",
            messagingSenderId: "61281183940",
            appId: "1:61281183940:web:792fd9ba9acba8f5090191"
        };

        initializeApp(firebaseConfig);
    }
    
    public firebaseUserObject(): User | null {
        return getAuth(FirebaseService.firebaseApp()).currentUser
    }
}