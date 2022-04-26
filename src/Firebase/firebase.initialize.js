import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
const authInitialize=()=>{
    initializeApp(firebaseConfig)
}
export default authInitialize