import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Couldn't Authorisied by google.");
    }
  };
  return (
    <button
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-gray-300 py-2 rounded-xl cursor-pointer text-xl hover:bg-gray-400 active:bg-gray-500"
    >
      <FaGoogle className="mr-2 text-2xl" />
      Continue With Google
    </button>
  );
};

export default OAuth;
