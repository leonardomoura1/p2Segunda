import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYLG9eC2DZgI64muA0u8yv3Hsw7g6UTEQ",
  authDomain: "p2segunda-83ae7.firebaseapp.com",
  projectId: "p2segunda-83ae7",
  storageBucket: "p2segunda-83ae7.appspot.com",
  messagingSenderId: "989069352578",
  appId: "1:989069352578:web:effd97e4ad986e7132de9b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth};