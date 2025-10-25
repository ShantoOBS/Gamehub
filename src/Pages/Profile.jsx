import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import unknow from "../assets/unknow.jpg";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { auth } from "../firebaes/firebase.config";

const Profile = () => {
  const { user, setUser, setLoading, updatePro } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Profile | GameHub";
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();

    if (!name || !photo) {
      setMessage("Please fill in both fields.");
      return;
    }
   
      updatePro({ displayName: name, photoURL: photo })
      .then( ()=>{

           setUser({...user,displayName: name, photoURL: photo })
           toast.success("Profile updated successfully!");
           form.reset();
           setLoading(false);
           
      })
     .catch (error => {
      setMessage(error.message);
     })
 
    }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="text-white px-4 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-black p-8 rounded-2xl shadow-sm shadow-blue-500"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Your Profile</h1>

        <div className="flex flex-col md:flex-row justify-eve
        nly gap-8">
     
          <motion.div
            className="text-center mb-6 md:w-1/2"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={user?.photoURL || user?.reloadUserInfo?.photoUrl || unknow}
              alt="User Avatar"
              className="w-40 h-40 mx-auto rounded-full border-2 border-indigo-500 mb-3 object-cover"
            />
            <h2 className="text-2xl font-bold">
              Name: {user?.displayName || "No Name"}
            </h2>
            <p className="text-gray-400 text-sm">
              Email: {user?.email || "No Email"}
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleUpdate}
            className="space-y-4 flex-1 md:w-1/2"
            variants={rightVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <label className="block text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter new name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter new photo URL"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {message && (
              <p className="text-center text-sm text-red-400">{message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
            >
              Update Information
            </button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
