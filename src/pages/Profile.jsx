import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, { name });

      toast.success("Profile data updated.");
    } catch (error) {
      toast.error("Profile data couldn't change right now");
    }
  };

  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl font-semibold text-center mt-6">Profile</h1>
      <div className="w-full md:w-[40%] mt-6 px-3">
        <form>
          <input
            type="text"
            id="name"
            className={`bg-purple-100 py-2 w-full rounded-2xl px-4 text-xl border border-gray-300 mb-5 ${
              changeDetails && "bg-purple-300"
            }`}
            onChange={handleChange}
            value={name}
            disabled={!changeDetails}
          />
          <input
            type="email"
            id="email"
            value={email}
            className="bg-purple-100 py-2 px-4 w-full text-xl border border-gray-300 rounded-2xl mb-5"
            disabled
          />
          <div className="flex justify-between whitespace-nowrap mt-2 gap-3">
            <p className="flex items-center">
              Do you want to change your name?{" "}
              <span
                onClick={() => {
                  changeDetails && handleSubmit();
                  setChangeDetails((prev) => !prev);
                }}
                className="ml-1 font-semibold text-amber-600 hover:text-amber-800 cursor-pointer"
              >
                {changeDetails ? "Apply Change" : "Edit"}
              </span>
            </p>
            <p
              onClick={onLogOut}
              className="font-bold text-blue-600 cursor-pointer hover:text-blue-800"
            >
              Sign Out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
