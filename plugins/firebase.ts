import firebase from "firebase/app"
import 'firebase/firestore'

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
const firestore = firebase.firestore()
export { firestore }
