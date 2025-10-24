import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import unknow from '../assets/unknow.jpg'

const Profile = () => {
  const { user, updatePro, setUser,setLoading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = " Profile | GameHub ";
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!name || !photoURL) {
      setMessage("Please fill in both fields.");
      return;
    }

    updatePro({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        alert("Profile updated successfully!");
        setLoading(false);
      })
      .catch((error) => setMessage(error.message));
  };

  console.log(user);

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white  px-4">
      <div className=" bg-gray-800 p-8 rounded-2xl shadow-sm shadow-blue-500">
        <h1 className="text-3xl font-bold text-center mb-6">Your Profile</h1>
        <div className="flex flex-col md:flex-row justify-evenly  ">

               {/* User Info Display */}
        <div className="text-center mb-6">
          <img
            src={user?.photoURL || user?.reloadUserInfo?.photoUrl || unknow}
            alt="User Avatar"
            className="w-50 h-50 mx-auto rounded-full border-2 border-indigo-500 mb-3"
          />
          <h2 className="text-2xl font-bold">Name : {user?.displayName || "No Name"}</h2>
          <p className="text-gray-400 text-sm">Email : {user?.email || "No Email"}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter new photo URL"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {message && <p className="text-center text-sm text-green-400">{message}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
          >
            Update Information
          </button>
        </form>

        </div>
     


      </div>
    </div>
  );
};

export default Profile;
