import Head from 'next/head';
import firebase from 'firebase';
import Authentication from '../containers/Authentication';

try {

 firebase.initializeApp({
     apiKey: "AIzaSyA7QDvdOomApCfMsRYVfprubBoNL3xn6pQ",
     authDomain: "photgram-2e120.firebaseapp.com",
     databaseURL: "https://photgram-2e120.firebaseio.com",
     projectId: "photgram-2e120",
     storageBucket: "photgram-2e120.appspot.com",
     messagingSenderId: "465887419929"
 })

} catch(err) {

    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

export const auth = firebase.auth();


export default () => (
  <div>

   <style global jsx>{`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      background: #F5F5F5;
    }

    `}</style>

    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto" rel="stylesheet" />
      <title>Photgram</title>
    </Head>

    <Authentication />
  </div>
)
