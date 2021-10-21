(function (window) {
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: 'AIzaSyCYuafDHMZkqFsiieBremD9aGquz5GDKPw',
    authDomain: 'cofferun-eed4e.firebaseapp.com',
    databaseURL: 'https://cofferun-eed4e-default-rtdb.firebaseio.com',
    projectId: 'cofferun-eed4e',
    storageBucket: 'cofferun-eed4e.appspot.com',
    messagingSenderId: '64483830116',
    appId: '1:64483830116:web:d29a66a768c144378af271',
    measurementId: 'G-34FHPR4XEY',
  };

  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
})(window);
