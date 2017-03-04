<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/database'
    import constants from './constants'

    firebase.initializeApp(constants.firebaseConfig);
    window.firebase = firebase;

    export default {
      name: 'app'
    }
</script>

<style>
</style>
