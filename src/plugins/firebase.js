import Vue from 'vue'
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: 'AIzaSyDXq9IUE5nNG9K5TkC0ITisguvqXDjw7G4',
  authDomain: 'p4d-test-237916.firebaseapp.com',
  databaseURL: 'https://p4d-test-237916.firebaseio.com',
  projectId: 'p4d-test-237916',
  storageBucket: 'p4d-test-237916.appspot.com',
  messagingSenderId: '598197575052',
  appId: '1:598197575052:web:7082afce1710e9fd'
})

Vue.prototype.$firebase = firebase
