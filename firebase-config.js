// ==========================================
// Firebase Configuration - 100% FREE
// 1. console.firebase.google.com yanna
// 2. Create Project → Project name: "sl-telecom"
// 3. Add Web App → Copy config
// 4. Realtime Database → Create → Start in test mode
// ==========================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "sl-telecom.firebaseapp.com",
    databaseURL: "https://sl-telecom-default-rtdb.firebaseio.com",
    projectId: "sl-telecom",
    storageBucket: "sl-telecom.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
