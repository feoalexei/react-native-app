// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCUfjK8TE3yN3K7rb1v8JYexs3ZnxHD5I",
  authDomain: "react-native-hw-app.firebaseapp.com",
  projectId: "react-native-hw-app",
  storageBucket: "react-native-hw-app.appspot.com",
  messagingSenderId: "957280623554",
  appId: "1:957280623554:web:f55138051e45c1267ed45b",
  measurementId: "G-J49LES6LYB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);