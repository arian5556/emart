import authInitialize from "../../Firebase/firebase.initialize"
import { GoogleAuthProvider,getAuth,createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword ,onAuthStateChanged ,signOut, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

authInitialize()

const useFirebaseAuth=()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const [isLoading,setIsLoading]=useState(true)

    const auth = getAuth();

    const googleSignIn=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const signInUser=(email,password,location,history)=>{
        setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination=location?.state?.from || "/";
      history.replace(destination)
      setError('')
    })
    .catch((error) => {
      setError(error.message);
    }).finally(()=>setIsLoading(false));
      }
      
    const signUpUser=(email,password,name,history)=>{
        setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setError('')
      const newUser={email,displayName:name}
      setUser(newUser)
      history.replace('/')
          })
          .catch((error) => {
           setError(error.message);
          }).finally(()=>setIsLoading(false));
      }
    
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message);
          }).finally(()=>setIsLoading(false));
    }
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user).then(idToken=>{localStorage.setItem("idToken",idToken)})
             setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe
    },[auth])
 return {
     user,
     googleSignIn,
     logOut,
     signUpUser,
     signInUser,
error,
isLoading,
 }
}
export default useFirebaseAuth