// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3xlRZrkSVt1XdLt1zR_whxo-Mnssk3k",
  authDomain: "eric-0728.firebaseapp.com",
  databaseURL: "https://eric-0728.firebaseio.com",
  projectId: "eric-0728",
  storageBucket: "",
  messagingSenderId: "886958382186",
  appId: "1:886958382186:web:a10b41c34db242b6"
};

// Initialize Firebase (avoid the initialize method call more than once )
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


// 參考文件
// https://firebase.google.com/docs/web/setup?authuser=1#add-sdks-initialize