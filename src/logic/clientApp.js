import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  };
  const apps = getApps();
  if (apps.length <= 0) {
    const app = initializeApp(clientCredentials);
    return app;
  }
};
const app = createFirebaseApp();

export const db = app ? getFirestore(app) : getFirestore();
