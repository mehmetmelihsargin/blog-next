import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB6C0ObH8QutuxF54L7oGYfxeOdUb_g3MA',
  authDomain: 'blog-efd42.firebaseapp.com',
  projectId: 'blog-efd42',
  storageBucket: 'blog-efd42.appspot.com',
  messagingSenderId: '569884413676',
  appId: '1:569884413676:web:98d8e9fbafa9201126dfc9',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
